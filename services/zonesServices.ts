import {query} from 'express';

import { ModelSql } from '../security/conection';

export module zonesServices{
    export const getAllZones = async () => {
        ModelSql.getConnection();
        const query = `SELECT 	cz.id_zones, 
                    		cm.id_municipality, 
                    		cm.municipality_name, 
                    		cd.id_department, 
                    		cd.department_name,
                            IF(cp.countplant IS NULL, 0, cp.countplant) countplant
                    FROM ciat_zones cz 
                    	INNER JOIN ciat_municipality cm     ON cm.id_municipality   = cz.id_municipality
                        INNER JOIN ciat_department cd       ON cd.id_department     = cm.ciat_department_id_department
                        LEFT JOIN (SELECT COUNT(cp.id_plant) countplant, cp.id_zones 
                                        FROM ciat_plants cp 
                                        GROUP BY cp.id_zones, cp.id_zones) cp ON cp.id_zones = cz.id_zones;`;
        const response = await ModelSql.execQuery(query);
        return response;

    }

    export const getZoneByLocation  = async ( id: string ) => {
        ModelSql.getConnection();
        const query =  `SELECT  cz.id_zones, 
                    		    cm.id_municipality, 
                    		    cm.municipality_name, 
                    		    cd.id_department, 
                    		    cd.department_name 
                        FROM ciat_zones cz 
                        	INNER JOIN ciat_municipality cm     ON cm.id_municipality   = cz.id_municipality
                            INNER JOIN ciat_department cd       ON cd.id_department     = cm.ciat_department_id_department
                        WHERE   cd.id_department        =       '${id}' OR 
                                cd.department_name      LIKE    '%${id}%' OR
                                cm.id_municipality      =       '${id}' OR 
		                        cm.municipality_name    LIKE    '%${id}%';`;
        const response = await ModelSql.execQuery(query);                
        return response;
    }

    export const getPlantsByZone = async ( id: string ) => {
        ModelSql.getConnection();
        const query =  `SELECT cp.id_plant, IF(cps.type_pest IS NULL, 0,  cps.type_pest) type
                        FROM ciat_plants cp LEFT JOIN ciat_pest cps ON cps.id_pest = cp.id_pest
                        WHERE cp.id_zones = '${id}';`;
        const response = await ModelSql.execQuery(query);                
        return response;
    }

    export const getInfectionInfoByLocation = async ( id: string ) => {
        ModelSql.getConnection();
        const query =  `SELECT 	cz.id_zones, 
                                cp.countplant,
                                cp2.type_pest,
                                cp2.isinfect infec,
                                TRUNCATE(cp2.isinfect/cp.countplant,2) infec_percent
                        FROM ciat_zones cz 
                        	INNER JOIN ciat_municipality cm ON cm.id_municipality = cz.id_municipality
                            INNER JOIN ciat_department cd ON cd.id_department = cm.ciat_department_id_department
                            INNER JOIN (SELECT COUNT(cp.id_plant) countplant, cp.id_zones
                                        FROM ciat_plants cp 
                                        GROUP BY cp.id_zones) cp ON cp.id_zones = cz.id_zones
                        	INNER JOIN (SELECT COUNT(cp.id_plant) isinfect, cp.id_zones, cps.type_pest 
                                        FROM ciat_plants cp 
                                        INNER JOIN ciat_pest cps ON cps.id_pest = cp.id_pest
                                        WHERE cp.id_pest is not null 
                                        GROUP BY cp.id_zones, cp.id_zones, cp.id_pest) cp2 ON cp2.id_zones = cz.id_zones
                        WHERE 	cz.id_zones    =    '${id}';`;
        const response = await ModelSql.execQuery(query);                
        return response;
    }
}