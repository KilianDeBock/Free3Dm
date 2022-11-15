create table product
(
    id           serial
        constraint "PK_bebc9158e480b949565b4dc7a82"
            primary key,
    name         varchar                 not null,
    "categoryId" integer                 not null
        constraint "FK_ff0c0301a95e517153df97f6812"
            references category,
    "brandId"    integer                 not null
        constraint "FK_bb7d3d9dc1fae40293795ae39d6"
            references brand,
    "createdAt"  timestamp default now() not null,
    "updatedAt"  timestamp default now() not null,
    description  varchar                 not null
);

alter table product
    owner to server;

INSERT INTO public.product (id, name, "categoryId", "brandId", "createdAt", "updatedAt", description) VALUES (2, '1.75mm PLA Filament', 3, 1, '2022-10-30 16:05:05.459990', '2022-10-30 16:05:05.459990', '# 1.75mm PLA Filament
The popular and easy-to-use 3D printer filament, polylactic acid (PLA), is available in a wide range of colours.

**Difficulty Level**: Beginner

**Strength**: Medium

**Flexibility**: Low

**Durability**: Medium

**Shrinkage/Warping**: Minimal

**Soluble**: No

**Food safe**: Yes

**Perfect for**: Non-mechanical prints like toys and figurines

## Printing Details

**Print temperature**: 180 – 230°C

**Heated Bed**: Not required.

## More Details

**Pros**

 - Easy to use
 - No off-putting odour
 - More environmentally friendly (as compared to other 3D printer
   filaments)

**Cons**

 - Brittle: avoid using for projects that will be bent, twisted, or
   dropped
 - Deforms above temperatures of 60°C

');
INSERT INTO public.product (id, name, "categoryId", "brandId", "createdAt", "updatedAt", description) VALUES (1, 'Creality Ender 3 Pro Filament 3D Printer
', 2, 1, '2022-10-23 18:09:03.769843', '2022-10-23 18:09:03.769843', 'The Creality Ender 3 Pro 3D printer is an excellent printer for hobbyists and makers. The Ender 3 Pro has an upgraded build plate and improved stability so your prints are more precise. The Creality Ender 3 Pro 3D printer has the following features:

 - Magnetic build plate
 - Improved bearing wheels to reduce friction and create more stability
 - Power-recovery mode allows you to resume printing after an unexpected power loss
## Specifications

**Technology**: FDM

**Printing size**: 220x220x250mm

**Filament types**: PLA, ABS, TPU, PETG

**Maximum printing speed**: 180mm/s

**Maximum bed temperature**: 110&deg;C

**Maximum nozzle temperature**: 240&deg;C

**Extruder**: Bowden

**Build plate**: “CMAG” magnetic plate

**Slicer software**: Cura, Repetier-Host, simplify3D

');
INSERT INTO public.product (id, name, "categoryId", "brandId", "createdAt", "updatedAt", description) VALUES (3, 'Creality Ender 3 Filament 3D Printer', 2, 1, '2022-11-02 20:09:20.260045', '2022-11-02 20:09:20.260045', 'The Creality Ender 3 3D printer is an ideal printer for new and intermediate 3D printing enthusiasts. The Ender 3 is semi-assembled, so you can assemble it quickly and get printing. The Creality Ender 3 3D printer has the following features:

 - Stable all-metal body
 - Hotbed reaches its maximum temperature in 5 minutes
 - Power-recovery mode allows you to resume printing after an unexpected power loss
## Specifications
**Technology**: FDM

**Printing size**: 220x220x250mm

**Filament types**: PLA, ABS, TPU, PETG

**Maximum printing speed**: 180mm/s

**Maximum bed temperature**: 110&deg;C

**Maximum nozzle temperature**: 240&deg;C

**Extruder**: Bowden

**Build plate**: BuildTak-style sticker

**Slicer software**: Cura, Repetier-Host, simplify3D
');
INSERT INTO public.product (id, name, "categoryId", "brandId", "createdAt", "updatedAt", description) VALUES (9, 'ELEGOO Saturn S Mono Resin 3D Printer
', 2, 1, '2022-11-15 18:28:45.000000', '2022-11-15 18:28:46.000000', 'The ELEGOO Saturn S Mono 3D printer is an excellent printer for experienced hobbyists and makers. The Saturn S Mono is a resin printer that’s easy to use and has high printing accuracy. The ELEGOO Saturn S Mono 3D printer has the following features:

 - Long-lasting, high 4K resolution mono LCD screen
 - Shock absorption unit for stable and accurate printing
 - Replaceable carbon filter to absorb resin fumes
## Specifications
**Technology**: LED Display Photocuring

**Printing size**: 196x122x210mm

**Maximum printing speed**: 70mm/h

**Layer thickness**: 0.01-0.15mm

**Slicer software**: ChituBox
');
INSERT INTO public.product (id, name, "categoryId", "brandId", "createdAt", "updatedAt", description) VALUES (6, 'Creality Ender 3 V2 Filament 3D Printer
', 2, 1, '2022-11-15 18:28:39.000000', '2022-11-15 18:28:39.000000', 'The Creality Ender 3 V2 3D printer is an excellent printer for hobbyists and makers. The Ender 3 V2 delivers smooth print results with a new build plate that ensures uniform heating. The Creality Ender 3 V2 3D printer has the following features:

 - Silent mainboard for quieter printing
 - Improved filament feed for smoother printing
 - High print quality
 - Power-recovery mode allows you to resume printing after an unexpected power loss
## Specifications
**Technology**: FDM

**Printing size**: 220x220x250mm

**Filament types**: PLA, ABS, TPU, PETG

**Maximum printing speed**: 180mm/s

**Layer thickness**: 0.1-0.4mm

**Maximum bed temperature**: 110&deg;C

**Maximum nozzle temperature**: 260&deg;C

**Extruder**: Bowden

**Build plate**: Carborundum glass

**Slicer software**: Cura, simplify3D
');
INSERT INTO public.product (id, name, "categoryId", "brandId", "createdAt", "updatedAt", description) VALUES (5, 'Creality Ender 3 S1 Filament 3D Printer
', 2, 1, '2022-11-15 18:28:37.000000', '2022-11-15 18:28:37.000000', 'The Creality Ender 3 S1 3D printer is our most precise FDM printer making it an excellent printer for experienced makers. With the largest print size and upgraded extruder capable of printing a wider variety of filaments, the Ender 3 S1 is the best printer for your complex projects. The Ender 3 S1 3D printer has the following features:

 - Silent mainboard for quieter printing
 - Automatic bed leveling
 - New user interface for simple operation
 - Power-recovery mode allows you to resume printing after an unexpected power loss
## Specifications
**Technology**: FDM

**Printing size**: 220x220x270mm

**Filament types**: PLA, ABS, TPU, PETG

**Maximum printing speed**: 150mm/s

**Layer thickness**: 0.05-0.4mm

**Maximum bed temperature**: 100&deg;C

**Maximum nozzle temperature**: 260&deg;C

**Extruder**: “Sprite” dual-gear direct extruder

**Build plate**: PC spring steel magnetic build plate

**Slicer software**: Cura
');
INSERT INTO public.product (id, name, "categoryId", "brandId", "createdAt", "updatedAt", description) VALUES (7, 'ELEGOO Mars 2 Mono Resin 3D Printer
', 2, 1, '2022-11-15 18:28:41.000000', '2022-11-15 18:28:42.000000', 'The ELEGOO Mars 2 Mono 3D printer is an ideal printer for new and experienced 3D printing enthusiasts. The Mars 2 Mono is a resin printer that’s easy to use and has high printing accuracy. The ELEGOO Mars 2 Mono 3D printer has the following features:

 - Long-lasting 2K mono LCD screen
 - Sturdy aluminum body
 - Replaceable resin tank
## Specifications
**Technology**: UV Photocuring

**Printing size**: 129x80x150mm

**Maximum printing speed**: 50mm/h

**Layer thickness**: 0.01-0.2mm

**Slicer software**: ChituBox
');
INSERT INTO public.product (id, name, "categoryId", "brandId", "createdAt", "updatedAt", description) VALUES (8, 'ELEGOO Mars 3 MSLA Resin 3D Printer
', 2, 1, '2022-11-15 18:28:43.000000', '2022-11-15 18:28:43.000000', 'The ELEGOO Mars 3 MSLA 3D printer is an ideal printer for hobbyists and makers. The Mars 3 MSLA is a resin printer that’s easy to use and has high printing accuracy. The ELEGOO Mars 3 MSLA 3D printer has the following features:

 - Long-lasting, high 4K resolution mono LCD screen
 - Large build volume and build plate
 - Quick, highly detailed printing
## Specifications
**Technology**: MSLA 3D Stereolithography

**Printing size**: 143.43x89.6x175mm

**Maximum printing speed**: 50mm/h

**Layer thickness**: 0.01-0.2mm

**Slicer software**: ChituBox
');
INSERT INTO public.product (id, name, "categoryId", "brandId", "createdAt", "updatedAt", description) VALUES (10, 'ELEGOO Water Washable Standard Photopolymer Resin (1000g)
', 1, 1, '2022-11-15 18:49:55.000000', '2022-11-15 18:49:57.000000', 'ELEGOO Water Washable Resin is ideal for LCD 3D printers. This is a high-precision resin with fast curing times and low shrinkage. It is available in a wide range of vibrant colours.

**Difficulty Level**: Beginner-Intermediate

**Strength**: High

**Flexibility**: High

**Durability**: High

**Shrinkage/Warping**: Low

**Soluble**: Uncured resin is soluble in water

**Food Safe**: No

**Perfect for**: Miniature objects with extra detail, like boardgame pieces; watertight applications; dental applications, like clear aligners and surgical guides
## Printing Details
**Technology**: Ideal for LCD, suitable for DLP

**Recommended Setting**:
Bottom exposure: 60s
Normal exposure: 8s
## More Details
**Pros**

 - Produces very detailed objects
 - Washable in water—no expensive or harmful cleaners required
 - Fast curing time

**Cons**

 - More expensive than filament
 - Requires post-processing
');
INSERT INTO public.product (id, name, "categoryId", "brandId", "createdAt", "updatedAt", description) VALUES (11, '3D Pen', 4, 1, '2022-11-16 18:54:26.000000', '2022-11-15 18:54:28.000000', '# 3D Pen
Create 3D projects without software or files! With a 3D Pen you can draw and create 3D doodles on any flat surface. Draw and connect material in mid-air to create unique 3D master pieces.

**Difficulty Level**: Beginner

**Perfect for**: Kids, beginners, artists, and educators

## How does a 3D pen work?

The plastic printing material is pushed through the pen, heated to the appropriate temperature, and leaves the pen in a soft, melted state. This malleable plastic hardens within a few seconds, taking the shape of your structure.

## Filament Type

ABS: Best for beginners and drawing in mid-air

PLA: Best for drawing directly onto flat surfaces


');
INSERT INTO public.product (id, name, "categoryId", "brandId", "createdAt", "updatedAt", description) VALUES (12, '1.75mm PLA Filament, *3 Pack*
', 5, 1, '2022-11-15 18:58:25.000000', '2022-11-15 18:58:28.000000', '*3 Pack: Black, Blue, White*

The popular and easy-to-use 3D printer filament, PLA (polylactic acid), in a pack of three.

**Difficulty Level**: Beginner

**Strength**: Medium

**Flexibility**: Low

**Durability**: Medium

**Shrinkage/Warping**: Minimal

**Soluble**: No

**Food safe**: Yes

**Perfect for**: Non-mechanical prints like toys and figurines

## Printing Details

**Print temperature**: 180 – 230°C

**Heated Bed**: Not required.

## More Details

**Pros**

- Easy to use
- No off-putting odour
- More environmentally friendly (as compared to other 3D printer filaments)

**Cons**

- Brittle: avoid using for projects that will be bent, twisted, or dropped
- Deforms above temperatures of 60°C
');
INSERT INTO public.product (id, name, "categoryId", "brandId", "createdAt", "updatedAt", description) VALUES (14, '1.75mm PETG Filament, *6 Pack*
', 5, 1, '2022-11-15 18:58:25.000000', '2022-11-15 18:58:25.000000', '*6 Pack*

This pack of six spools of PETG (polyethylene terephthalate glycol) filament contains the following colours:

- Black
- White
- Grey x 2
- Red
- Blue

**Difficulty Level**: Beginner

**Strength**: High

**Flexibility**: Medium

**Durability**: High

**Shrinkage/Warping**: Minimal

**Soluble**: No

**Food safe**: Yes

**Perfect for**: Functional objects that may experience physical stress, like mechanical and protective parts

## Printing Details

**Print temperature**: 220 – 250°C

**Heated Bed**: 50 – 75°C (required)

**Printing recommendations**: Use a low print speed for a higher quality result

## More Details

**Pros**

- A happy medium between PLA and ABS filaments
- Clearer, less brittle, flexible, durable, and temperature resistant
- Great for layer adhesion

**Cons**

- Sticky when printed
- Scratches easily
- Susceptible to moisture
');
INSERT INTO public.product (id, name, "categoryId", "brandId", "createdAt", "updatedAt", description) VALUES (15, '1.75mm TPE Filament, *2 Pack*
', 5, 1, '2022-11-15 18:58:25.000000', '2022-11-15 18:58:25.000000', '*2 Pack: Black x 2*

The soft and stretchable TPE (thermoplastic elastomer) flexible filament in a pack of two.

**Difficulty Level**: Intermediate

**Strength**: Medium

**Flexibility**: Very High

**Durability**: Very High

**Shrinkage/Warping**: Minimal

**Soluble**: No

**Food safe**: No

**Perfect for**: Prints that will experience a lot of physical wear and tear (bending, stretching, compressing) or harsh weather conditions. Great for toys, phone cases, wearable bands, household appliances, and medical supplies.

## Printing Details

**Print temperature**: 210 – 230°C

**Heated Bed**: Not required

**Printing recommendations**: Tight filament path and slow print speed are recommended

## More Details

**Pros**

- Withstands physical stressors that ABS and PLA filaments can’t tolerate

**Cons**

- Can be difficult to extrude
');