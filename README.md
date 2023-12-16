Aplicação fullStack CRUD <br>
<br>
Front-End criado em HTML, CSS e Javascript simples com seu javascript usando método POST para enviar os dados de cadastro do usuário para o banco de dados.<br>
<br>
Aplicação feita em JAVA Spring BOOT, e banco de dados MY SQL WORKBENCH ,(também testei usando XAMPP + HEIDISQL e funcionou normalmente)<br>
<br>
Código SQL para quem quiser reproduzir

CREATE DATABASE banco_de_usuarios;<br>
<br>
USE banco_de_usuarios;<br>
<br>
CREATE TABLE usuario(<br>
  id             INTEGER AUTO_INCREMENT PRIMARY KEY,<br>
  username       VARCHAR(200) NOT NULL unique,<br>
  email          VARCHAR(200) NOT NULL unique,<br>
  senha          TEXT NOT NULL,<br>
  telefone       VARCHAR(15) NOT NULL<br>
<br>
);<br>
<br>
INSERT INTO usuario VALUES (NULL, 'teste', 'teste@gmail.com', 'senha123', '1199229922');<br>
<br>
SELECT * FROM usuario;<br>
<br>
<br>
Foram usadas outras ferramentas durante o processo para testes como POSTMAN, para testar os métodos criados GET, PUT, DELETE, POST
<br>

 
