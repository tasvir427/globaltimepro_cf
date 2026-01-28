'use client';

import React, {
  useMemo,
  useRef,
  useLayoutEffect,
  Children,
  isValidElement,
  memo,
} from 'react';
import { VariableSizeList as List } from 'react-window';
import {
  adjustedOffset,
  createGetHeight,
  flattenGroupedChildren,
  getSelectedIndex,
} from '@/utils';

const CustomMenuList = (props) => {
  const isScrollToDone = useRef(false);
  const measuredHeights = useRef({});
  const scrollPos = useRef({});

  const { getStyles } = props;
  const groupHeadingStyles = getStyles('groupHeading', props);
  const loadingMsgStyles = getStyles('loadingMessage', props);
  const noOptionsMsgStyles = getStyles('noOptionsMessage', props);
  const optionStyles = getStyles('option', props);
  const {
    maxHeight,
    paddingBottom = 0,
    paddingTop = 0,
    ...menuListStyle
  } = getStyles('menuList', props);

  const defaultH = 35;

  const groupHeadingHeight = groupHeadingStyles?.height ?? 25;
  const noOptionsMsgHeight = noOptionsMsgStyles?.height ?? defaultH;
  const optionHeight = optionStyles?.height ?? defaultH;
  const loadingMsgHeight = loadingMsgStyles?.height ?? defaultH;
  const getHeight = useMemo(
    () =>
      createGetHeight({
        groupHeadingHeight,
        noOptionsMsgHeight,
        optionHeight,
        loadingMsgHeight,
      }),
    [groupHeadingHeight, noOptionsMsgHeight, optionHeight, loadingMsgHeight],
  );

  const children = useMemo(() => {
    const childrenArray = Children.toArray(props.children);
    const head = childrenArray[0] || {};

    if (isValidElement(head)) {
      const { props: { data: { options = [] } = {} } = {} } = head;
      const isGrouped = options.length > 0;
      return isGrouped ? flattenGroupedChildren(childrenArray) : childrenArray;
    }
    return [];
  }, [props.children]);

  const heights = useMemo(() => children.map(getHeight), [children]);
  const selectedIndex = useMemo(() => getSelectedIndex(children), [children]);

  const itemCount = children.length;
  const totalHeight = useMemo(() => {
    return heights.reduce((sum, height, idx) => {
      return (
        sum +
        (measuredHeights.current[idx] !== undefined
          ? measuredHeights.current[idx]
          : height)
      );
    }, 0);
  }, [heights]);

  const totalMenuHeight = totalHeight + paddingBottom + paddingTop;
  const menuHeight = Math.min(maxHeight, totalMenuHeight);
  const estimatedItemSize = Math.floor(totalHeight / itemCount);

  const { innerRef, selectProps } = props;
  const { classNamePrefix, isMulti } = selectProps || {};
  const list = useRef(null);

  const setMeasuredHeight = ({ index, measuredHeight }) => {
    if (
      measuredHeights.current[index] !== undefined &&
      measuredHeights.current[index] === measuredHeight
    ) {
      return;
    }

    const itemSizeDiff =
      measuredHeight - (measuredHeights.current[index] || defaultH);

    measuredHeights.current = {
      ...measuredHeights.current,
      [index]: measuredHeight,
    };

    if (list.current) {
      list.current.resetAfterIndex(index);

      if (!scrollPos.current.scrollUpdateWasRequested) {
        const newOffset = adjustedOffset(scrollPos.current, itemSizeDiff);
        list.current.scrollTo(newOffset);
      }
    }
  };

  useLayoutEffect(() => {
    if (list.current) {
      if (!isScrollToDone.current) {
        list.current.resetAfterIndex(selectedIndex || 0);
        list.current.scrollTo(0);
      }
      if (selectedIndex > 0 && !isScrollToDone.current) {
        setTimeout(() => {
          list.current.scrollToItem(selectedIndex, 'start');
        }, 0);
        isScrollToDone.current = true;
      } else {
        scrollPos.current = {
          ...scrollPos.current,
          scrollOffset: 0,
        };
        list.current.scrollTo(0);
      }
    }
  }, [selectedIndex, props.options]);

  const initialScrollOffset = useMemo(() => {
    if (selectedIndex > 0) {
      return heights.slice(0, selectedIndex).reduce((acc, cur) => acc + cur, 0);
    }
    return 0;
  }, [selectedIndex, heights]);

  return (
    <List
      onScroll={(scrollOffset) => (scrollPos.current = scrollOffset)}
      initialScrollOffset={initialScrollOffset}
      className={
        classNamePrefix
          ? `${classNamePrefix}__menu-list${
              isMulti ? ` ${classNamePrefix}__menu-list--is-multi` : ''
            }`
          : ''
      }
      style={menuListStyle}
      ref={list}
      outerRef={innerRef}
      estimatedItemSize={estimatedItemSize}
      innerElementType={({ style, ...rest }) => (
        <div
          style={{
            ...style,
            height: `${
              parseFloat(style.height) + paddingBottom + paddingTop
            }px`,
          }}
          {...rest}
        />
      )}
      height={menuHeight}
      width="100%"
      itemCount={itemCount}
      itemData={children}
      itemSize={(index) => measuredHeights.current[index] || heights[index]}
    >
      {({ data, index, style }) => (
        <div
          style={{
            ...style,
            top: `${parseFloat(style.top.toString()) + paddingTop}px`,
          }}
        >
          <MenuItem
            data={data[index]}
            index={index}
            setMeasuredHeight={setMeasuredHeight}
          />
        </div>
      )}
    </List>
  );
};

export default memo(CustomMenuList);

const MenuItem = memo(function MenuItem({ data, index, setMeasuredHeight }) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    if (ref.current) {
      const measuredHeight = ref.current.getBoundingClientRect().height;
      setMeasuredHeight({ index, measuredHeight });
    }
  }, [ref.current]);

  return (
    <div key={`option-${index}`} ref={ref}>
      {data}
    </div>
  );
});
