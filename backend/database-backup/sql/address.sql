create table address
(
    id             serial
        constraint "PK_d92de1f82754668b5f5f5dd4fd5"
            primary key,
    country        varchar                 not null,
    city           varchar                 not null,
    "postalCode"   varchar                 not null,
    state          varchar                 not null,
    "streetName"   varchar                 not null,
    "streetNumber" varchar                 not null,
    "customerId"   integer                 not null
        constraint "FK_dc34d382b493ade1f70e834c4d3"
            references customer,
    "createdAt"    timestamp default now() not null,
    "updatedAt"    timestamp default now() not null
);

alter table address
    owner to server;

INSERT INTO public.address (id, country, city, "postalCode", state, "streetName", "streetNumber", "customerId", "createdAt", "updatedAt") VALUES (1, 'Belgium', 'Zelzate', '9060A', 'Oost-Vlaanderen', 'Leegstraat', '1a', 1, '2022-10-23 18:12:18.541195', '2022-10-23 18:12:18.541195');
