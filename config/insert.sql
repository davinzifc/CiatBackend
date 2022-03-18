INSERT INTO `ciat_department` (`id_department`, `department_name`) 
    VALUES  ('52', 'Nariño'), 
            ('19', 'Cauca'), 
            ('27', 'Choco'), 
            ('5', 'Antioquia');

INSERT INTO `ciat_municipality` (`id_municipality`, `municipality_name`, `ciat_department_id_department`) 
    VALUES  ('659', 'SAN JUAN DE URABA', '5'), 
            ('665', 'SAN PEDRO DE URABA', '5'),
            ('425', 'MEDIO ATRATO', '27');

INSERT INTO `ciat_pest` (`id_pest`, `type_pest`) 
    VALUES  (NULL, 'Escama roja'), 
            (NULL, 'Gualpa');

INSERT INTO `ciat_plants` (`id_plant`, `id_zones`, `id_pest`) 
    VALUES  (NULL, '1', '1'), 
            (NULL, '1', '1'), 
            (NULL, '1', NULL), 
            (NULL, '1', NULL), 
            (NULL, '1', NULL), 
            (NULL, '1', NULL), 
            (NULL, '1', NULL), 
            (NULL, '1', '1'), 
            (NULL, '1', NULL), 
            (NULL, '1', NULL);

INSERT INTO `ciat_plants` (`id_plant`, `id_zones`, `id_pest`) 
    VALUES  (NULL, '2', '2'), 
            (NULL, '2', NULL), 
            (NULL, '2', '2'), 
            (NULL, '2', NULL), 
            (NULL, '2', NULL), 
            (NULL, '2', '2'), 
            (NULL, '2', NULL), 
            (NULL, '2', '2'), 
            (NULL, '2', NULL), 
            (NULL, '2', '2'), 
            (NULL, '2', '2'), 
            (NULL, '2', NULL);

INSERT INTO `ciat_plants` (`id_plant`, `id_zones`, `id_pest`) 
    VALUES  (NULL, '3', '2'), 
            (NULL, '3', NULL), 
            (NULL, '3', '2'), 
            (NULL, '3', NULL), 
            (NULL, '3', '2'), 
            (NULL, '3', '2'), 
            (NULL, '3', '2'), 
            (NULL, '3', '2'), 
            (NULL, '3', '2'), 
            (NULL, '3', NULL);

INSERT INTO `ciat_plants` (`id_plant`, `id_zones`, `id_pest`) 
    VALUES  (NULL, '6', '1'), 
            (NULL, '6', '1'), 
            (NULL, '6', '2'), 
            (NULL, '6', '1'), 
            (NULL, '6', '2'), 
            (NULL, '6', '2'), 
            (NULL, '6', '1'), 
            (NULL, '6', '1'), 
            (NULL, '6', '2'), 
            (NULL, '6', '2'), 
            (NULL, '6', '2'), 
            (NULL, '6', '1'), 
            (NULL, '6', '1'), 
            (NULL, '6', '1'), 
            (NULL, '6', '1'), 
            (NULL, '6', '1');

INSERT INTO `ciat_zones` (`id_zones`, `id_municipality`)
    VALUES  (NULL, '659'),
            (NULL, '659'),
            (NULL, '659'),
            (NULL, '659'),
            (NULL, '659'),
            (NULL, '425');