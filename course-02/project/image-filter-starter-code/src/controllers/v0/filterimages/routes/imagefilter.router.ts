import { Router, Request, Response } from 'express';
import {filterImageFromURL, deleteLocalFiles} from '../../../../util/util';

const router: Router = Router();

// Filter Image
router.get( "/", async (req: Request, res: Response)  => {
    const { image_url } = req.query;

    // validate the image_url query
    if(!image_url) {
      return res.status(400).send('The image url is missing.');
    }

    // call filterImageFromURL(image_url) to filter the image
    const filteredpath = await filterImageFromURL(image_url);
    res.sendFile(filteredpath);

    // deletes any files on the server on finish of the response
    res.on('finish', () => {
      deleteLocalFiles([filteredpath]);
    } );
    
  } );

export const ImageFilterRouter: Router = router;