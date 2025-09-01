Funcionalidade: Cadastro no site Adopet

Cenário: Realizar um cadastro no site com sucesso

Passos:

O usuário acessa a página de cadastro.
O usuário preenche o campo "Nome".
O usuário preenche o campo "E-mail" com um endereço de e-mail válido.
O usuário preenche o campo "Senha" com uma senha válida.
O usuário preenche o campo "Confirmação de Senha" com a mesma senha inserida no passo anterior.
O usuário clica no botão "Cadastrar".

Resultados Esperados:

O sistema processa as informações fornecidas.

Regra de Negócio:

E-mail e senha são campos obrigatórios para o cadastro.



Cenário : falha na tentativa de cadastro 

Passos:

O usuário acessa a página de cadastro.
O usuário deixa os campos obrigatórios (nome emial,senha e confirmação de senha ) em branco.
O usuário clica no botão "Cadastrar".

Resultado Esperado:

O sitema valida os campos obrigatórios em branco.
o sistema exibe mensagem de erro indicando que os campso obrigatórios devem ser preenchidos.


Funcionalidade : login no site Adopet 

Cenário : Login no sistema com sucesso 

Passos:

O usuário acessa a pagina de login.
O usuário insere seu email "ana@emial.com" e senha "Senha123" nos campos correspondentes.
O usuário clica no botão "Entrar".

Resultado esperado:

O sistema autentica as credenciais fornecidas.
O sitema redireciona o usuáriopara a página "/home".

Funcionalidade: Login no sitem Adopet

Cenário: falha no login do sistema 

Passos: