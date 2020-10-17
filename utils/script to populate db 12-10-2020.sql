DELETE FROM users;
DELETE FROM fermentables;
DELETE FROM yeast; 
DELETE FROM hops;
DELETE FROM beer_styles;
DELETE FROM recipes;
DELETE FROM hops_recipe;
DELETE FROM yeasts_recipe;
DELETE FROM fermentables_recipe;

INSERT INTO users (id, email, "password", "name", avatar_url, shop) VALUES ('5c18ca26-550e-410a-9e2c-c38476c94146', 'wes1@bst.com.br', '123456', 'wes01', 'avatar_url', 'false' );
INSERT INTO users (id, email, "password", "name", avatar_url, shop) VALUES ('eff5e60e-ebe5-48e5-808b-25aa15ff0120', 'wes2@bst.com.br', '123456', 'wes02', 'avatar_url', 'false' );
INSERT INTO users (id, email, "password", "name", avatar_url, shop) VALUES ('547a2c97-85d2-4a95-9bdf-d30bced133b7', 'wes3@bst.com.br', '123456', 'wes03', 'avatar_url', 'false' );
INSERT INTO users (id, email, "password", "name", avatar_url, shop) VALUES ('4f2c241b-1fd1-4a61-b05c-26a3b2417368', 'wes4@bst.com.br', '123456', 'wes04', 'avatar_url', 'false' );

INSERT INTO fermentables (id ,"name", potential, color) VALUES ('a21ae611-5069-432c-9eea-04f70f5fb9cd','Pale Ale',1.037,13);
INSERT INTO fermentables (id ,"name", potential, color) VALUES ('7e8d776c-9ba1-4a80-b577-a4dc3f5f28cf','Crystal',1.036,12);
INSERT INTO fermentables (id ,"name", potential, color) VALUES ('71e70d48-8e7b-4183-9b44-aea77250a0e3','Pilsner',1.037,2);
INSERT INTO fermentables (id ,"name", potential, color) VALUES ('ca8d5096-1028-4b21-9526-523a421392d1','Black',1.037,40);

INSERT INTO yeast (id, "name" ) VALUES ('40e81bab-fc49-45ae-afcd-05b0bfb1e6f5', 'Enblish Ale');
INSERT INTO yeast (id, "name") VALUES ('c143d002-1f4e-4799-8316-5439da290e40', 'London Ale');
INSERT INTO yeast (id, "name") VALUES ('5cb64215-e497-4fd8-bb26-28fb30be2082', 'American Ale');

INSERT INTO hops (id, "alpha_acid", "name", "type") VALUES ('a2b96a8a-6488-4948-b65c-b12819320f0d', 10, 'Tradition', 'Biterring, Aroma' );
INSERT INTO hops (id, "alpha_acid", "name", "type") VALUES ('bc23ada7-ad1a-4ffd-92fe-bd56d54f8646', 6, 'El Dorado', 'Biterring, Aroma' );
INSERT INTO hops (id, "alpha_acid", "name", "type") VALUES ('3a23e505-0b58-4637-a780-ecdf1ecfe345', 10, 'Mosaic', 'Aroma' );

INSERT INTO beer_styles (id, "name" ,img_url , description, short_description, color_initial, color_final , abv_initial, abv_final , fg_initial, fg_final, og_initial, og_final , ibu_initial , ibu_final) VALUES  ('64708e22-3966-420a-b236-0759f65c7825', 'English Red ale','img path',  'Cerveja inglesa e vermelha', 'criada na inglaterra', 16, 18, 5.2, 5.5, 1.08, 1.012, 1.048, 1.052, 22, 27);

INSERT INTO recipes (id, "name", description, color , fg, og, user_id , style_id,final_volume,ibu, abv) VALUES ('ca9812d4-ea39-44f6-8280-41642280ac79', 'receita de teste 01', 'esta receita ? um teste 01', 12, 1.008, 1.046, '5c18ca26-550e-410a-9e2c-c38476c94146', '64708e22-3966-420a-b236-0759f65c7825', 30, 55, 3.4 );
INSERT INTO hops_recipe (hop_id, quantity, add_time, add_type, recipe_id) VALUES ('a2b96a8a-6488-4948-b65c-b12819320f0d', 10, 11, 'first hop', 'ca9812d4-ea39-44f6-8280-41642280ac79');
INSERT INTO yeasts_recipe (recipe_id, yeast_id) VALUES ('ca9812d4-ea39-44f6-8280-41642280ac79', '40e81bab-fc49-45ae-afcd-05b0bfb1e6f5');
INSERT INTO fermentables_recipe (recipe_id, fermentable_id, potential, quantity, color) VALUES ('ca9812d4-ea39-44f6-8280-41642280ac79', 'a21ae611-5069-432c-9eea-04f70f5fb9cd', 1.037, 8, 13);

