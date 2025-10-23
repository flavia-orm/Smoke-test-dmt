DMT - Domain Management Tool

DMT (Domain Management Tool), patenteado pela DNS Filter, funciona como um firewall de validação, oferecendo alta confiabilidade na gestão de domínios.

🛡️ Descrição do Sistema

O DMT é um sistema crítico voltado para o gerenciamento seguro de domínios. Suas principais características incluem:

Process Analysis: análise detalhada dos processos de validação.

Screenshots: registro visual das etapas para auditoria e conferência.

Login Personalizado: cada usuário possui um tipo específico de acesso.

Segurança Robusta: implementação de autenticação em duas etapas (2FA) e validação de diferentes tipos de usuários, incluindo administradores e usuários somente leitura.

O sistema é altamente sensível, e qualquer falha de segurança pode ter impactos significativos, por isso os testes focam na integridade e proteção da plataforma.

✅ Objetivos dos Testes

O projeto de testes automatizados com Cypress incluiu:

Verificação completa dos painéis do sistema.

Garantia da segurança e integridade da plataforma.

📂 Estrutura do Projeto

cypress/e2e → todos os testes automatizados.

cypress/fixtures → dados de teste, podendo conter dados sensíveis em arquivos privados.

cypress/support → comandos e hooks globais do Cypress.

🛠️ Tecnologias Utilizadas

Cypress: automação de testes end-to-end.

JavaScript: scripts de teste e configuração.

Git / GitHub Desktop: controle de versão.

