import { ChangeEvent, useCallback, useState } from 'react';

import DeleteIcon from '@mui/icons-material/Delete';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const Input = styled('input')({
  display: 'none',
});

type PictureInputProps = {
  image?: string;
  onChange: (image?: string) => void;
};

export const PictureInput = (props: PictureInputProps) => {
  const { image, onChange } = props;

  const readURI = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = function (ev) {
        if (ev.target && typeof ev.target.result === 'string') {
          onChange(ev.target.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    readURI(e);
  };

  const handleClear = useCallback(() => {
    onChange(undefined);
  }, []);

  if (image) {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', flex: 1 }}>
        <Input accept="image/*" id="upload-cocktail-picture" type="file" onChange={handleChange} />
        <img className="thumbnail" src={image} width={300}></img>

        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 1 }}>
          <IconButton component="label" color="primary" htmlFor="upload-cocktail-picture">
            <FileUploadIcon />
            <Input accept="image/*" id="upload-cocktail-picture" type="file" onChange={handleChange} />
          </IconButton>
          <IconButton aria-label="delete" color="error" onClick={handleClear}>
            <DeleteIcon />
          </IconButton>
        </Box>
      </Box>
    );
  }

  return (
    <Box
      component="label"
      htmlFor="upload-cocktail-picture"
      sx={{
        p: 2,
        cursor: 'pointer',
        border: '1px dashed grey',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1,
        width: 300,
      }}
    >
      <Input accept="image/*" id="upload-cocktail-picture" type="file" onChange={handleChange} />
      <FileUploadIcon />
      <Button component="span">Upload picture</Button>
    </Box>
  );
};
