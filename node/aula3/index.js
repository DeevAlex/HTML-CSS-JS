// NPM - Node Package Manager

// no terminal:

// para selecionar a pasta: cd <nome da  pasta>

// para criar o package na pasta: npm init -y ou y , só y você cria tudo na mão, descrição, nome e entre outros

// para instalar um pacote vai direto para dependencies: npm i <nome do pacote>

// para instalar uma versão exata: npm i <nome do pacote> -E

// para atualizar: npm update

// para mover para devDependencies <esse é para pacotes de desenvolvimento como babel, webpack entre outras>: npm i <nome do pacote> --save-dev

// para mover de devDependencies para dependencies: npm install <nome do pacote> --save-prod

// para instalar a versão que dependa: npm install <nome do pacote>@<versão>
// versão       2 - quebra de compatibilidade       1 - add arquivo novo       0 - arrumar bugs
//                      major                              minor                      patch

// se tiver ^ ele vai atualizar dps do primeiro ponto por exemplo ^2.<0.0> essas serão atualizadas

// se tiver ~ ele vai mexer só na versão patch

// para instalar na ultima versão também é: npm install <nome do pacote>@<versão>.x

// para desinstalar: npm uninstall <nome do pacote>

// para listar os pacotes que estão no package.json: npm ls

// para não abrir as pastas do pacote: npm ls --depth=0  - o 0 é para ver os que já instalei

// para ver quais pacotes estão desatualizados: npm outdated  esse aqui se tiver um desatualizado com ^ ele vai mostrar o mais atualizado daquela versão se estiver com ~ ele fala que essa mesma versão que você esta usando é o ultimo pacth
