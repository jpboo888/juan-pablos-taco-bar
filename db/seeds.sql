INSERT INTO inventory
  (plate, pricing)
VALUES
  ('Taco Combo #1', '$10' ),
  ('Taco Combo #2', '$12'),
  ('Taco Combo #3', '$14'),
  ('Taco Combo #4', '$15');

  INSERT INTO customers
  (first_name, last_name, phone_number, customer_address)
VALUES
  ('john', 'doe', '800-900-8989', '123 seseme street'),
  ('jane', 'doe', '800-900-9898', '123 seseme street'),
  ('john', 'paul', '790-890-7979', '47 paper st' ),
  ('henry', 'james', '800-867-5309', '420 taco avenue');

  INSERT INTO order_table
  (first_name, last_name, order, pricing)
VALUES
  ('john', 'doe', 'Taco Combo #1', '$10' ),
  ('jane', 'doe', 'Taco Combo #2', '$12'),
  ('john', 'paul', 'Taco Combo #3', '$14'),
  ('henry', 'james', 'Taco Combo #4', '$15');