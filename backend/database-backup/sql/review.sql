create table review
(
    id           serial,
    stars        integer                 not null,
    title        varchar                 not null,
    review       varchar                 not null,
    "articleId"  integer                 not null
        constraint "FK_392d1bd467a05f6634a4e31f33c"
            references article,
    "customerId" integer                 not null
        constraint "FK_e4d7f0ae06cc3b06f3d0af133d4"
            references customer,
    "createdAt"  timestamp default now() not null,
    "updatedAt"  timestamp default now() not null,
    constraint "PK_f1a6e642ea3095f48ca8aedaf45"
        primary key (id, "articleId", "customerId")
);

alter table review
    owner to server;

INSERT INTO public.review (id, stars, title, review, "articleId", "customerId", "createdAt", "updatedAt") VALUES (5, 2, 'Lol', 'I got this as a gift for my birthday and I have to say it is the best present that I’ve received. I wanted to start creating 3D objects as a hobby. It was easy to build because there were straightforward instructions and videos to follow. I managed to record my first print of a cat on TikTok Live and so many people were satisfied with the outcome.
', 3, 1, '2022-11-03 15:23:33.000000', '2022-11-03 15:23:33.000000');
INSERT INTO public.review (id, stars, title, review, "articleId", "customerId", "createdAt", "updatedAt") VALUES (3, 2, 'Lol', 'The shipping took a long time, the printer came in two months after I’ve ordered. The filament that shipped with the product was slightly damaged because of the tight packaging. However, the printer itself was packed perfectly. The printer is amazing, and I love using it! The filament still works but I will have to be cautious when using it.
', 3, 1, '2022-11-03 15:23:33.000000', '2022-11-03 15:23:33.000000');
INSERT INTO public.review (id, stars, title, review, "articleId", "customerId", "createdAt", "updatedAt") VALUES (4, 1, 'Lol', 'I have to say that this is the best tool that I own. The pricing is unbeatable, and the quality is incredible! This printer will teach you a lot that expensive printers won’t. It will take some adjustments to use it. For the size and price, it’s the best investment for beginners.
', 3, 1, '2022-11-03 15:23:33.000000', '2022-11-03 15:23:33.000000');
INSERT INTO public.review (id, stars, title, review, "articleId", "customerId", "createdAt", "updatedAt") VALUES (1, 4, 'Lol', 'I was not excepting expecting to have a high-quality product for this price! This is my first 3D printer and I’m extremely satisfied and excited to use it. The printer came well packed and secured. The assembly of the printer was easy with the help of the guide that came with it.
', 3, 1, '2022-11-03 15:23:33.000000', '2022-11-03 15:23:33.000000');
INSERT INTO public.review (id, stars, title, review, "articleId", "customerId", "createdAt", "updatedAt") VALUES (6, 3, 'Lol', 'In the beginning, my printer was working fine, and I had no major issues. After 4 months my printer started to tangle the filament in the middle of the print. I’ve tried adjusting the bed and other parts, but nothing has changed. It seems that it only works with smaller projects after some time has passed.
', 3, 1, '2022-11-03 15:23:33.000000', '2022-11-03 15:23:33.000000');
