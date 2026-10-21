import { Router, type Request, type Response } from "express";

const router = Router();

// ==================== HEALTH CHECK ====================
router.get('/', (req: Request, res: Response) => {
    res.status(200).json({
        mensagem: "InfoTech Estoque API Online",
        timestamp: new Date()
    });
});


export { router };