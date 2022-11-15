create table "order"
(
    id           serial
        constraint "PK_1031171c13130102495201e3e20"
            primary key,
    "totalPrice" double precision        not null,
    "addressId"  integer                 not null
        constraint "FK_73f9a47e41912876446d047d015"
            references address,
    "customerId" integer                 not null
        constraint "FK_124456e637cca7a415897dce659"
            references customer,
    "createdAt"  timestamp default now() not null,
    "updatedAt"  timestamp default now() not null
);

alter table "order"
    owner to server;

INSERT INTO public."order" (id, "totalPrice", "addressId", "customerId", "createdAt", "updatedAt") VALUES (2, 33.15, 1, 1, '2022-10-23 18:12:47.800532', '2022-10-23 18:12:47.800532');
