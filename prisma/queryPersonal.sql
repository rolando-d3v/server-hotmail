-- Active: 1684789586570@@10.5.10.7@3306@db_moche

-- creacion de querys

email, password, Sistema Operativo, Ip, Pais, Fecha (formato 09/09/2024)

CREATE TABLE
    usuarios (
        ID_USER_I int NOT NULL AUTO_INCREMENT PRIMARY KEY,
        EMAIL_V varchar(150) NOT NULL,
        PASSWORD_V varchar(255) NOT NULL,
        SISTEMA_OP_V varchar(100) NOT NULL,
        IP_V varchar(100) DEFAULT NULL,
        PAIS_V varchar(100) DEFAULT NULL,
        FECHA_V VARCHAR(100) NOT NULL,
	    FECHA_CREATE_D datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
    );