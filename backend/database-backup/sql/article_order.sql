create table article_order
(
    "orderId"   integer                 not null
        constraint "FK_74de8573042a07e06cd23d3d32b"
            references "order",
    "articleId" integer                 not null
        constraint "FK_5a73feebbc74fbd60edc6cd06b5"
            references article,
    amount      integer                 not null,
    "createdAt" timestamp default now() not null,
    "updatedAt" timestamp default now() not null,
    constraint "PK_41c4ef738c26db5e0125ccb0bda"
        primary key ("orderId", "articleId")
);

alter table article_order
    owner to server;

INSERT INTO public.article_order ("orderId", "articleId", amount, "createdAt", "updatedAt") VALUES (2, 1, 5, '2022-10-23 18:13:00.065796', '2022-10-23 18:13:00.065796');
