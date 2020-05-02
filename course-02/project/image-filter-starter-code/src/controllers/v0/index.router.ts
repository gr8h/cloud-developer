import { Router, Request, Response } from 'express';
import { ImageFilterRouter } from './filterimages/routes/imagefilter.router';

const router: Router = Router();

router.use('/filteredimage', ImageFilterRouter);

router.get( "/", async (req: Request, res: Response) => {
    res.send("try GET /filteredimage?image_url={{}}")
} );

export const IndexRouter: Router = router;