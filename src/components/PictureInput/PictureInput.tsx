import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { ChangeEvent, useState } from 'react';

const Input = styled('input')({
  display: 'none',
});

export const PictureInput = () => {
  const [image, setImage] = useState<{ imageURI: string | ArrayBuffer | null } | null>(null);

  const readURI = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = function (ev) {
        ev.target && setImage({ imageURI: ev.target.result });
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    readURI(e);
  };

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
      {image ? (
        <div className="row">
          <div className="small-9 small-centered columns">
            <Input accept="image/*" id="upload-cocktail-picture" type="file" onChange={handleChange} />
            <img className="thumbnail" src={image.imageURI as string} width={300}></img>
          </div>
        </div>
      ) : (
        <>
          <Input accept="image/*" id="upload-cocktail-picture" type="file" onChange={handleChange} />
          <InsertPhotoIcon />
          <Button component="span">Upload picture</Button>
        </>
      )}
    </Box>
  );
};
