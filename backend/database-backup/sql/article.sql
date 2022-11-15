create table article
(
    id          serial
        constraint "PK_40808690eb7b915046558c0f81b"
            primary key,
    price       double precision        not null,
    "productId" integer                 not null
        constraint "FK_6f1a870eb227a9ceaa0b8dcf277"
            references product,
    "createdAt" timestamp default now() not null,
    "updatedAt" timestamp default now() not null
);

alter table article
    owner to server;

INSERT INTO public.article (id, price, "productId", "createdAt", "updatedAt") VALUES (3, 599.99, 3, '2022-11-02 20:09:31.490421', '2022-11-02 20:09:31.490421');
INSERT INTO public.article (id, price, "productId", "createdAt", "updatedAt") VALUES (7, 599.99, 5, '2022-11-15 18:35:41.000000', '2022-11-15 18:35:42.000000');
INSERT INTO public.article (id, price, "productId", "createdAt", "updatedAt") VALUES (8, 599.99, 6, '2022-11-15 18:35:43.000000', '2022-11-15 18:35:41.000000');
INSERT INTO public.article (id, price, "productId", "createdAt", "updatedAt") VALUES (9, 599.99, 7, '2022-11-15 18:35:45.000000', '2022-11-15 18:35:44.000000');
INSERT INTO public.article (id, price, "productId", "createdAt", "updatedAt") VALUES (10, 599.99, 8, '2022-11-15 18:35:47.000000', '2022-11-15 18:35:44.000000');
INSERT INTO public.article (id, price, "productId", "createdAt", "updatedAt") VALUES (11, 599.99, 9, '2022-11-15 18:35:47.000000', '2022-11-15 18:35:46.000000');
INSERT INTO public.article (id, price, "productId", "createdAt", "updatedAt") VALUES (1, 599.99, 1, '2022-10-23 18:09:05.511706', '2022-10-23 18:09:05.511706');
INSERT INTO public.article (id, price, "productId", "createdAt", "updatedAt") VALUES (4, 28.99, 2, '2022-10-30 16:05:29.385374', '2022-10-30 16:05:29.385374');
INSERT INTO public.article (id, price, "productId", "createdAt", "updatedAt") VALUES (5, 28.99, 2, '2022-10-30 16:05:29.385374', '2022-10-30 16:05:29.385374');
INSERT INTO public.article (id, price, "productId", "createdAt", "updatedAt") VALUES (6, 28.99, 2, '2022-10-30 16:05:29.385374', '2022-10-30 16:05:29.385374');
INSERT INTO public.article (id, price, "productId", "createdAt", "updatedAt") VALUES (2, 28.99, 2, '2022-10-30 16:05:29.385374', '2022-10-30 16:05:29.385374');
INSERT INTO public.article (id, price, "productId", "createdAt", "updatedAt") VALUES (12, 39.99, 10, '2022-11-15 18:50:57.000000', '2022-11-15 18:50:55.000000');
INSERT INTO public.article (id, price, "productId", "createdAt", "updatedAt") VALUES (13, 39.99, 10, '2022-11-15 18:50:54.000000', '2022-11-15 18:51:01.000000');
INSERT INTO public.article (id, price, "productId", "createdAt", "updatedAt") VALUES (14, 39.99, 10, '2022-11-15 18:50:57.000000', '2022-11-15 18:51:01.000000');
INSERT INTO public.article (id, price, "productId", "createdAt", "updatedAt") VALUES (15, 39.99, 10, '2022-11-15 18:50:56.000000', '2022-11-15 18:50:58.000000');
INSERT INTO public.article (id, price, "productId", "createdAt", "updatedAt") VALUES (16, 39.99, 10, '2022-11-15 18:50:59.000000', '2022-11-15 18:51:00.000000');
INSERT INTO public.article (id, price, "productId", "createdAt", "updatedAt") VALUES (17, 68.99, 11, '2022-11-15 18:55:39.000000', '2022-11-15 18:55:40.000000');
INSERT INTO public.article (id, price, "productId", "createdAt", "updatedAt") VALUES (18, 68.99, 11, '2022-11-15 18:55:40.000000', '2022-11-15 18:55:41.000000');
INSERT INTO public.article (id, price, "productId", "createdAt", "updatedAt") VALUES (19, 68.99, 11, '2022-11-15 18:55:46.000000', '2022-11-15 18:55:44.000000');
INSERT INTO public.article (id, price, "productId", "createdAt", "updatedAt") VALUES (20, 68.99, 11, '2022-11-15 18:55:43.000000', '2022-11-15 18:55:44.000000');
INSERT INTO public.article (id, price, "productId", "createdAt", "updatedAt") VALUES (21, 68.99, 11, '2022-11-15 18:55:42.000000', '2022-11-15 18:55:42.000000');
INSERT INTO public.article (id, price, "productId", "createdAt", "updatedAt") VALUES (23, 120, 14, '2022-11-15 18:55:42.000000', '2022-11-15 18:55:42.000000');
INSERT INTO public.article (id, price, "productId", "createdAt", "updatedAt") VALUES (25, 85, 15, '2022-11-15 18:55:42.000000', '2022-11-15 18:55:42.000000');
INSERT INTO public.article (id, price, "productId", "createdAt", "updatedAt") VALUES (24, 250, 12, '2022-11-15 18:55:42.000000', '2022-11-15 18:55:42.000000');
