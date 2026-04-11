'use client';

import { memo } from 'react';
import CustomSelect from '@/Components/CustomSelect';
import { useDL } from '@/Contexts/DLContext';
import { fileTypeOptions, placeholders } from '@/utils';

const FileType = () => {
  const { fileType, handleFileType } = useDL();

  return (
    <CustomSelect
      options={fileTypeOptions}
      placeholder={placeholders.dl_fileType}
      value={fileType}
      onChange={handleFileType}
      classNamePrefix="react_select_scroll"
      isClearable
    />
  );
};

export default memo(FileType);
