import {Router, Request, Response} from "express";


const router = Router();


router.get('/', (req: Request, res: Response) => {
    return res.json({message: 'Bem vindo a API Dio Shopping'})
})

router.get('/message', listMessageController.hanle);
router.post('/message', createMessageController.handle)

export {router}