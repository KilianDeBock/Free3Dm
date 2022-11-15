create table category
(
    id           serial
        constraint "PK_9c4e4a89e3674fc9f382d733f03"
            primary key,
    name         varchar                 not null,
    "categoryId" integer
        constraint "FK_8a300c5ce0f70ed7945e877a537"
            references category,
    "createdAt"  timestamp default now() not null,
    "updatedAt"  timestamp default now() not null
);

alter table category
    owner to server;

INSERT INTO public.category (id, name, "categoryId", "createdAt", "updatedAt") VALUES (2, '3D Printers', null, '2022-10-30 16:04:50.516746', '2022-10-30 16:04:50.516746');
INSERT INTO public.category (id, name, "categoryId", "createdAt", "updatedAt") VALUES (1, 'Resin', null, '2022-10-23 18:09:02.578306', '2022-10-23 18:09:02.578306');
INSERT INTO public.category (id, name, "categoryId", "createdAt", "updatedAt") VALUES (3, 'Filaments', null, '2022-11-06 16:03:25.000000', '2022-11-06 16:03:24.000000');
INSERT INTO public.category (id, name, "categoryId", "createdAt", "updatedAt") VALUES (4, 'Toys', null, '2022-11-15 18:24:35.000000', '2022-11-15 18:24:36.000000');
INSERT INTO public.category (id, name, "categoryId", "createdAt", "updatedAt") VALUES (5, 'Business Products', null, '2022-11-15 18:24:51.000000', '2022-11-15 18:24:52.000000');
