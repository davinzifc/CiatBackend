-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema ciatdba
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema ciatdba
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `ciatdba` DEFAULT CHARACTER SET utf8 ;
USE `ciatdba` ;

-- -----------------------------------------------------
-- Table `ciatdba`.`ciat_pest`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ciatdba`.`ciat_pest` (
  `id_pest` INT NOT NULL AUTO_INCREMENT,
  `type_pest` VARCHAR(25) NOT NULL,
  PRIMARY KEY (`id_pest`),
  UNIQUE INDEX `idciat_pest_UNIQUE` (`id_pest` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ciatdba`.`ciat_department`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ciatdba`.`ciat_department` (
  `id_department` INT NOT NULL,
  `department_name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_department`),
  UNIQUE INDEX `idciat_dpt_UNIQUE` (`id_department` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ciatdba`.`ciat_municipality`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ciatdba`.`ciat_municipality` (
  `id_municipality` INT NOT NULL,
  `municipality_name` VARCHAR(45) NOT NULL,
  `ciat_department_id_department` INT NOT NULL,
  PRIMARY KEY (`id_municipality`),
  UNIQUE INDEX `id_municipality_UNIQUE` (`id_municipality` ASC),
  INDEX `fk_ciat_municipality_ciat_department1_idx` (`ciat_department_id_department` ASC),
  CONSTRAINT `fk_ciat_municipality_ciat_department1`
    FOREIGN KEY (`ciat_department_id_department`)
    REFERENCES `ciatdba`.`ciat_department` (`id_department`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ciatdba`.`ciat_zones`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ciatdba`.`ciat_zones` (
  `id_zones` INT NOT NULL AUTO_INCREMENT,
  `id_municipality` INT NOT NULL,
  PRIMARY KEY (`id_zones`, `id_municipality`),
  UNIQUE INDEX `id_zones_UNIQUE` (`id_zones` ASC),
  INDEX `fk_ciat_zones_ciat_municipality1_idx` (`id_municipality` ASC),
  CONSTRAINT `fk_ciat_zones_ciat_municipality1`
    FOREIGN KEY (`id_municipality`)
    REFERENCES `ciatdba`.`ciat_municipality` (`id_municipality`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ciatdba`.`ciat_plants`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ciatdba`.`ciat_plants` (
  `id_plant` INT NOT NULL AUTO_INCREMENT,
  `id_zones` INT NOT NULL,
  `id_pest` INT NULL,
  PRIMARY KEY (`id_plant`),
  INDEX `fk_ciat_plants_ciat_zones_idx` (`id_zones` ASC),
  INDEX `fk_ciat_plants_ciat_pest1_idx` (`id_pest` ASC),
  CONSTRAINT `fk_ciat_plants_ciat_zones`
    FOREIGN KEY (`id_zones`)
    REFERENCES `ciatdba`.`ciat_zones` (`id_zones`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_ciat_plants_ciat_pest1`
    FOREIGN KEY (`id_pest`)
    REFERENCES `ciatdba`.`ciat_pest` (`id_pest`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
