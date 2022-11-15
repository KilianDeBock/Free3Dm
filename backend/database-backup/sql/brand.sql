create table brand
(
    id              serial
        constraint "PK_a5d20765ddd942eb5de4eee2d7f"
            primary key,
    name            varchar                 not null,
    "contactNumber" integer                 not null,
    "btwNumber"     varchar                 not null,
    "createdAt"     timestamp default now() not null,
    "updatedAt"     timestamp default now() not null
);

alter table brand
    owner to server;

INSERT INTO public.brand (id, name, "contactNumber", "btwNumber", "createdAt", "updatedAt") VALUES (1, 'Lyttle', 320934294, 'BE000000000', '2022-10-23 18:09:00.950178', '2022-10-23 18:09:00.950178');
