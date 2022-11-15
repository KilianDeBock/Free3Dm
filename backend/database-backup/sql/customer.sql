create table customer
(
    id          serial
        constraint "PK_a7a13f4cacb744524e44dfdad32"
            primary key,
    email       varchar                 not null,
    password    varchar                 not null,
    "firstName" varchar                 not null,
    "lastName"  varchar,
    "birthDate" timestamp               not null,
    "createdAt" timestamp default now() not null,
    "updatedAt" timestamp default now() not null
);

alter table customer
    owner to server;

INSERT INTO public.customer (id, email, password, "firstName", "lastName", "birthDate", "createdAt", "updatedAt") VALUES (2, 'test', 'test', 'test', 'test', '0200-11-12 00:00:00.000000', '2022-10-23 18:08:59.263441', '2022-10-23 18:08:59.263441');
INSERT INTO public.customer (id, email, password, "firstName", "lastName", "birthDate", "createdAt", "updatedAt") VALUES (1, 'test', 'test', 'Stualyttle', 'Kirry', '2000-11-12 00:00:00.000000', '2022-10-23 18:08:56.019568', '2022-10-23 18:08:56.019568');
