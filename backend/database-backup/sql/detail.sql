create table detail
(
    id          serial,
    key         varchar                 not null,
    value       varchar                 not null,
    "articleId" integer                 not null
        constraint "FK_401024d3dd1db89dcdaa9bebeda"
            references article,
    "createdAt" timestamp default now() not null,
    "updatedAt" timestamp default now() not null,
    constraint "PK_1796fd9cd50f062ed0488ce94e6"
        primary key (id, "articleId")
);

alter table detail
    owner to server;

INSERT INTO public.detail (id, key, value, "articleId", "createdAt", "updatedAt") VALUES (5, 'name', 'Green PLA', 2, '2022-11-06 15:58:14.000000', '2022-11-06 15:58:16.000000');
INSERT INTO public.detail (id, key, value, "articleId", "createdAt", "updatedAt") VALUES (2, 'image', '/media/images/109 - Green.jpg', 2, '2022-10-31 13:43:26.210656', '2022-10-31 13:51:09.621360');
INSERT INTO public.detail (id, key, value, "articleId", "createdAt", "updatedAt") VALUES (6, 'name', 'Blue PLA', 4, '2022-11-06 15:58:14.000000', '2022-11-06 15:58:16.000000');
INSERT INTO public.detail (id, key, value, "articleId", "createdAt", "updatedAt") VALUES (8, 'name', 'Red PLA', 5, '2022-11-06 15:58:14.000000', '2022-11-06 15:58:16.000000');
INSERT INTO public.detail (id, key, value, "articleId", "createdAt", "updatedAt") VALUES (9, 'name', 'Pink PLA', 6, '2022-11-06 15:58:14.000000', '2022-11-06 15:58:16.000000');
INSERT INTO public.detail (id, key, value, "articleId", "createdAt", "updatedAt") VALUES (10, 'image', '/media/images/106 - Pink.jpg', 6, '2022-10-31 13:43:26.210656', '2022-10-31 13:51:09.621360');
INSERT INTO public.detail (id, key, value, "articleId", "createdAt", "updatedAt") VALUES (11, 'image', '/media/images/110 - Red.jpg', 5, '2022-10-31 13:43:26.210656', '2022-10-31 13:51:09.621360');
INSERT INTO public.detail (id, key, value, "articleId", "createdAt", "updatedAt") VALUES (7, 'image', '/media/images/108 - Dark blue.jpg', 4, '2022-10-31 13:43:26.210656', '2022-10-31 13:51:09.621360');
INSERT INTO public.detail (id, key, value, "articleId", "createdAt", "updatedAt") VALUES (3, 'image', 'https://img.staticdj.com/78b4b1a181b236e46e401c5efe4df976_540x.jpg', 3, '2022-10-31 13:43:26.210656', '2022-10-31 13:51:09.621360');
INSERT INTO public.detail (id, key, value, "articleId", "createdAt", "updatedAt") VALUES (4, 'name', 'Creality Ender 3 Filament 3D Printer', 3, '2022-11-04 16:26:29.000000', '2022-11-04 16:26:30.000000');
INSERT INTO public.detail (id, key, value, "articleId", "createdAt", "updatedAt") VALUES (1, 'image', 'https://img.staticdj.com/1abb58d05800d58806f18e4c0157c790_540x.jpg', 1, '2022-10-31 13:41:52.661396', '2022-10-31 13:41:52.661396');
INSERT INTO public.detail (id, key, value, "articleId", "createdAt", "updatedAt") VALUES (12, 'image', 'https://img.staticdj.com/52d4e8a5e0a63066592527c8f8dc54f8_540x.jpg', 7, '2022-11-15 18:41:01.000000', '2022-11-15 18:41:00.000000');
INSERT INTO public.detail (id, key, value, "articleId", "createdAt", "updatedAt") VALUES (13, 'name', 'Creality Ender 3 S1 Filament 3D Printer
', 7, '2022-11-15 18:41:02.000000', '2022-11-15 18:40:58.000000');
INSERT INTO public.detail (id, key, value, "articleId", "createdAt", "updatedAt") VALUES (14, 'image', 'https://img.staticdj.com/2e04a8d6247ebdb9fcc57b41bfd09a1c_540x.jpg', 8, '2022-11-15 18:41:03.000000', '2022-11-15 18:40:58.000000');
INSERT INTO public.detail (id, key, value, "articleId", "createdAt", "updatedAt") VALUES (15, 'name', 'Creality Ender 3 V2 Filament 3D Printer
', 8, '2022-11-15 18:41:06.000000', '2022-11-15 18:40:56.000000');
INSERT INTO public.detail (id, key, value, "articleId", "createdAt", "updatedAt") VALUES (17, 'name', 'ELEGOO Mars 2 Mono Resin 3D Printer
', 9, '2022-11-15 18:40:55.000000', '2022-11-15 18:40:54.000000');
INSERT INTO public.detail (id, key, value, "articleId", "createdAt", "updatedAt") VALUES (19, 'name', 'ELEGOO Mars 3 MSLA Resin 3D Printer
', 10, '2022-11-15 18:40:53.000000', '2022-11-15 18:40:53.000000');
INSERT INTO public.detail (id, key, value, "articleId", "createdAt", "updatedAt") VALUES (21, 'name', 'ELEGOO Saturn S Mono Resin 3D Printer
', 11, '2022-11-15 18:40:51.000000', '2022-11-15 18:40:51.000000');
INSERT INTO public.detail (id, key, value, "articleId", "createdAt", "updatedAt") VALUES (22, 'name', 'Creality Ender 3 Pro Filament 3D Printer', 1, '2022-11-15 18:41:04.000000', '2022-11-15 18:40:50.000000');
INSERT INTO public.detail (id, key, value, "articleId", "createdAt", "updatedAt") VALUES (16, 'image', 'https://cdn.shopify.com/s/files/1/0296/9026/5648/products/1-2_a3a8c59e-da3f-4214-b8ee-5d93345882c4_1024x1024.jpg?v=1668456696', 9, '2022-11-15 18:40:55.000000', '2022-11-15 18:40:56.000000');
INSERT INTO public.detail (id, key, value, "articleId", "createdAt", "updatedAt") VALUES (20, 'image', 'https://cdn.shopify.com/s/files/1/0296/9026/5648/products/elegoo-saturn-s-msla-91-4k-mono-lcd-3d-printer-3d-printers-elegoo-shop-997651_2048x2048.jpg?v=1645180731', 11, '2022-11-15 18:40:52.000000', '2022-11-15 18:40:52.000000');
INSERT INTO public.detail (id, key, value, "articleId", "createdAt", "updatedAt") VALUES (18, 'image', 'https://cdn.shopify.com/s/files/1/0296/9026/5648/products/pre-orderelegoo-mars-3-ultra-4k-mono-lcd-3d-printer-with-3pcs-fep20-film-3d-printers-elegoo-356741_2048x2048.jpg?v=1637567969', 10, '2022-11-15 18:40:53.000000', '2022-11-15 18:40:54.000000');
INSERT INTO public.detail (id, key, value, "articleId", "createdAt", "updatedAt") VALUES (23, 'name', 'White', 12, '2022-11-15 17:53:40.989622', '2022-11-15 17:53:40.989622');
INSERT INTO public.detail (id, key, value, "articleId", "createdAt", "updatedAt") VALUES (24, 'image', 'https://m.media-amazon.com/images/I/61EvRs-yXDL._SL1500_.jpg', 12, '2022-11-15 17:53:40.989622', '2022-11-15 17:53:40.989622');
INSERT INTO public.detail (id, key, value, "articleId", "createdAt", "updatedAt") VALUES (25, 'name', 'Mint Green', 13, '2022-11-15 17:53:40.989622', '2022-11-15 17:53:40.989622');
INSERT INTO public.detail (id, key, value, "articleId", "createdAt", "updatedAt") VALUES (26, 'image', 'https://m.media-amazon.com/images/I/71GRA6FqG8L._SL1500_.jpg', 13, '2022-11-15 17:53:40.989622', '2022-11-15 17:53:40.989622');
INSERT INTO public.detail (id, key, value, "articleId", "createdAt", "updatedAt") VALUES (27, 'name', 'Clear Blue', 14, '2022-11-15 17:53:40.989622', '2022-11-15 17:53:40.989622');
INSERT INTO public.detail (id, key, value, "articleId", "createdAt", "updatedAt") VALUES (28, 'image', 'https://m.media-amazon.com/images/I/712TXcIcUKL._SL1500_.jpg', 14, '2022-11-15 17:53:40.989622', '2022-11-15 17:53:40.989622');
INSERT INTO public.detail (id, key, value, "articleId", "createdAt", "updatedAt") VALUES (29, 'name', 'Black', 15, '2022-11-15 17:53:40.989622', '2022-11-15 17:53:40.989622');
INSERT INTO public.detail (id, key, value, "articleId", "createdAt", "updatedAt") VALUES (30, 'image', 'https://m.media-amazon.com/images/I/61V4yOrh4QL._SL1500_.jpg', 15, '2022-11-15 17:53:40.989622', '2022-11-15 17:53:40.989622');
INSERT INTO public.detail (id, key, value, "articleId", "createdAt", "updatedAt") VALUES (31, 'name', 'Yellow', 16, '2022-11-15 17:53:40.989622', '2022-11-15 17:53:40.989622');
INSERT INTO public.detail (id, key, value, "articleId", "createdAt", "updatedAt") VALUES (32, 'image', 'https://m.media-amazon.com/images/I/71d0nQeaXcL._SL1500_.jpg', 16, '2022-11-15 17:53:40.989622', '2022-11-15 17:53:40.989622');
INSERT INTO public.detail (id, key, value, "articleId", "createdAt", "updatedAt") VALUES (33, 'name', 'White', 17, '2022-11-15 18:56:22.000000', '2022-11-15 18:56:32.000000');
INSERT INTO public.detail (id, key, value, "articleId", "createdAt", "updatedAt") VALUES (34, 'image', 'https://cdn.reprapworld.com/images/default/dynamic/products/large/prod_pZopdZ.jpg', 17, '2022-11-15 18:56:37.000000', '2022-11-15 18:56:32.000000');
INSERT INTO public.detail (id, key, value, "articleId", "createdAt", "updatedAt") VALUES (35, 'name', 'Red', 18, '2022-11-15 18:56:37.000000', '2022-11-15 18:56:31.000000');
INSERT INTO public.detail (id, key, value, "articleId", "createdAt", "updatedAt") VALUES (36, 'image', 'https://m.media-amazon.com/images/I/41pocdH+jWL.jpg', 18, '2022-11-15 18:56:36.000000', '2022-11-15 18:56:30.000000');
INSERT INTO public.detail (id, key, value, "articleId", "createdAt", "updatedAt") VALUES (37, 'name', 'Pink', 19, '2022-11-15 18:56:36.000000', '2022-11-15 18:56:30.000000');
INSERT INTO public.detail (id, key, value, "articleId", "createdAt", "updatedAt") VALUES (38, 'image', 'https://m.media-amazon.com/images/I/41-V9tUqaUS._AC_SL1500_.jpg', 19, '2022-11-15 18:56:35.000000', '2022-11-15 18:56:28.000000');
INSERT INTO public.detail (id, key, value, "articleId", "createdAt", "updatedAt") VALUES (39, 'name', 'Blue', 20, '2022-11-15 18:56:34.000000', '2022-11-15 18:56:28.000000');
INSERT INTO public.detail (id, key, value, "articleId", "createdAt", "updatedAt") VALUES (40, 'image', 'https://i5.walmartimages.com/asr/d5deeee5-5aec-4154-838d-c59897c0a9d8_1.10784f96f987b3f0cb13a39cc93ca7cc.jpeg', 20, '2022-11-15 18:56:34.000000', '2022-11-15 18:56:27.000000');
INSERT INTO public.detail (id, key, value, "articleId", "createdAt", "updatedAt") VALUES (41, 'name', 'Black', 21, '2022-11-15 18:56:33.000000', '2022-11-15 18:56:26.000000');
INSERT INTO public.detail (id, key, value, "articleId", "createdAt", "updatedAt") VALUES (42, 'image', 'https://cdn.reprapworld.com/images/default/dynamic/products/large/prod_TFWSax.jpg', 21, '2022-11-15 18:56:25.000000', '2022-11-15 18:56:25.000000');
INSERT INTO public.detail (id, key, value, "articleId", "createdAt", "updatedAt") VALUES (48, 'image', 'https://m.media-amazon.com/images/I/71ce-yMYGxL._AC_SL1500_.jpg', 25, '2022-11-15 18:56:25.000000', '2022-11-15 18:56:25.000000');
INSERT INTO public.detail (id, key, value, "articleId", "createdAt", "updatedAt") VALUES (44, 'image', 'https://m.media-amazon.com/images/I/71rdBhAQfUL._SL1500_.jpg', 23, '2022-11-15 18:56:25.000000', '2022-11-15 18:56:25.000000');
INSERT INTO public.detail (id, key, value, "articleId", "createdAt", "updatedAt") VALUES (47, 'name', '1.75mm TPE Filament, *2 Pack*
', 25, '2022-11-15 18:56:25.000000', '2022-11-15 18:56:25.000000');
INSERT INTO public.detail (id, key, value, "articleId", "createdAt", "updatedAt") VALUES (45, 'name', '1.75mm PETG Filament, *6 Pack*
', 23, '2022-11-15 18:56:25.000000', '2022-11-15 18:56:25.000000');
INSERT INTO public.detail (id, key, value, "articleId", "createdAt", "updatedAt") VALUES (43, 'name', '1.75mm PLA Filament, *3 Pack*
', 24, '2022-11-15 18:56:25.000000', '2022-11-15 18:56:25.000000');
INSERT INTO public.detail (id, key, value, "articleId", "createdAt", "updatedAt") VALUES (46, 'image', 'https://m.media-amazon.com/images/I/61HMptroAxL._SL1000_.jpg', 24, '2022-11-15 18:56:25.000000', '2022-11-15 18:56:25.000000');
