CREATE TABLE IF NOT EXISTS `minyak` (`id` INTEGER NOT NULL auto_increment , `nama` VARCHAR(255), `perioda` DATE, `harga` INTEGER, `stok` INTEGER, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS `users` (`id` INTEGER NOT NULL auto_increment , `username` VARCHAR(255), `password` VARCHAR(255), `status` VARCHAR(255), `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS `domisili` (`id` INTEGER NOT NULL auto_increment , `kecamatan` VARCHAR(255), `kelurahan` VARCHAR(255), `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS `warga` (`id` INTEGER NOT NULL auto_increment , `nama` VARCHAR(255), `username` VARCHAR(255), `password` VARCHAR(255), `alamat` VARCHAR(255), `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS `rt` (`id` INTEGER NOT NULL auto_increment , `rt` VARCHAR(255), `ketua` VARCHAR(255), `username` VARCHAR(255), `password` VARCHAR(255), `alamat` VARCHAR(255), `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB;

 CREATE TABLE IF NOT EXISTS `role` (`id` INTEGER NOT NULL auto_increment , `nama` VARCHAR(255), `username` VARCHAR(255), `password` VARCHAR(255), `refresh_token` TEXT, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB;

 CREATE TABLE IF NOT EXISTS `transaksi` (`id` INTEGER NOT NULL auto_increment , `rw` VARCHAR(255), `nama` VARCHAR(255), `no_transaksi` VARCHAR(255), `jumlah_pemesanan` INTEGER, `status_pemesanan` BOOLEAN,`createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB

 CREATE TABLE IF NOT EXISTS `laporan_penjualan` (`id` INTEGER NOT NULL auto_increment , `rw` VARCHAR(255), `ketua` VARCHAR(255), `no_transaksi` VARCHAR(255), `jumlah_pemesanan` INTEGER, `status_pembayaran` VARCHAR(255),`createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB