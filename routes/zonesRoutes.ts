import { Request, Response, Router } from "express";
import { Policies } from '../security/policies';
import { zonesController } from '../controllers/zonesController';

export const router = Router();
router.route('/');
router.get('/get/all', (req: Request, res: Response, next: any) => {
    let error = false;
    const apiKey = req.header("API-KEY");
    const apiKeyVerification = Policies.verifyApiKey(apiKey);
    if (apiKeyVerification.error) {
        error = true;
        res.status(apiKeyVerification.status).json({ error: true, msg: apiKeyVerification.msg });
    }
    if (!error) {
        next();
    }
}, zonesController.getAllZones)
.get('/get/location/:id',(req: Request, res: Response, next: any) => {
    let error = false;
    const apiKey = req.header("API-KEY");
    const apiKeyVerification = Policies.verifyApiKey(apiKey);
    if (apiKeyVerification.error) {
        error = true;
        res.status(apiKeyVerification.status).json({ error: true, msg: apiKeyVerification.msg });
    }
    if (!error) {
        next();
    }
}, zonesController.getZonesByLocation)
.get('/get/plants/:id',(req: Request, res: Response, next: any) => {
    let error = false;
    const apiKey = req.header("API-KEY");
    const apiKeyVerification = Policies.verifyApiKey(apiKey);
    if (apiKeyVerification.error) {
        error = true;
        res.status(apiKeyVerification.status).json({ error: true, msg: apiKeyVerification.msg });
    }
    if (!error) {
        next();
    }
}, zonesController.getPlantsByZone)
.get('/get/location/info/:id',(req: Request, res: Response, next: any) => {
    let error = false;
    const apiKey = req.header("API-KEY");
    const apiKeyVerification = Policies.verifyApiKey(apiKey);
    if (apiKeyVerification.error) {
        error = true;
        res.status(apiKeyVerification.status).json({ error: true, msg: apiKeyVerification.msg });
    }
    if (!error) {
        next();
    }
}, zonesController.getInfectionInfoByLocation);
