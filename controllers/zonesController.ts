import { Request, Response } from "express";
import { zonesServices } from '../services/zonesServices';
import { security } from '../security/security';

export module zonesController{
    export const getAllZones = async (req: Request, res: Response) => {
        const result = await zonesServices.getAllZones();
        res.status(200).send(result);
    }

    export const getZonesByLocation = async (req: Request, res: Response) => {
        const id = security.getDataCleanString(req.params.id);
        const result = (id.valid)?await zonesServices.getZoneByLocation(id.data)
                                :{
                                    msg:'Bad request',
                                    error: true
                                };

        res.status(200).send(result);
    }

    export const getPlantsByZone = async (req: Request, res: Response) => {
        const id = security.getDataCleanString(req.params.id);
        const result = (id.valid)?await zonesServices.getPlantsByZone(id.data)
                                :{
                                    msg:'Bad request',
                                    error: true
                                };

        res.status(200).send(result);
    }

    export const getInfectionInfoByLocation = async (req: Request, res: Response) => {
        const id = security.getDataCleanString(req.params.id);
        const result = (id.valid)?await zonesServices.getInfectionInfoByLocation(id.data)
                                :{
                                    msg:'Bad request',
                                    error: true
                                };

        res.status(200).send(result);
    }
}