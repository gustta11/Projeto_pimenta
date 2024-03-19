import Carrosel from '../components/Carrossel.jsx'
import './Clientes.css'

const Clientes = () =>{
    return(
        <div className='layout_geral'>
            <div className='conteudo_clientes'>
                <div className='conteudo_carrossel'>
                    <Carrosel/>
                </div>
                </div>
                
                <div className='conteudo_clientes'>
                    <div className='layout_cozinha_pratica'>
                            <div className='conteudo_cozinha_pratica'>
                                <h1>Receitas</h1>
                                <h2>Medalhões com molho de pimentas</h2>
                                <p>Ingredientes</p>
                                <ul>
                                    <li> 1 quilo de medalhão de filé mignon </li>
                                    <li> 1 colher (sopa) de MAGGI® Gril</li>
                                    <li> 3 colheres (sopa) de manteiga</li>
                                    <li> 1 cebola picada</li>
                                    <li> 3 colheres (sopa) de pimenta-biquinho sem semente cortada ao meio</li>
                                    <li> 1 colher (sopa) de pimenta-rosa triturada</li>
                                    <li> 1 pitada de pimenta-do-reino</li>
                                    <li> 1 lata de NESTLÉ® Creme de Leite</li>
                                    <h2>Modo de preparo</h2>
                                    <ol>
                                        <li>Em um recipiente, tempere os medalhões com o MAGGI Gril.</li>
                                        <li>Em uma frigideira, aqueça uma colher (sopa) da manteiga e doure os medalhões, virando-os de vez em quando.</li>
                                        <li>Retire da frigideira e reserve em local aquecido</li>
                                        <li>Na mesma frigideira, aqueça a manteiga restante e refogue levemente a cebola com as pimentas.</li>
                                        <li>Junte o NESTLÉ Creme de Leite, misture bem e sirva acompanhando os medalhões.</li>
                                    </ol>
                                </ul>
                                <div className='conteudo_cozinha_pratica2'>
                                    <h2>Chocolate quente com laranja e pimenta</h2>
                                    <p>Ingredientes</p>
                                    <ul>
                                        <li>70g de chocolate amargo (70% de cacau)</li>
                                        <li>1/2 litro de leite integral</li>
                                        <li>2 gemas</li>
                                        <li>2 colheres (sopa) de açúcar</li>
                                        <li>4 colheres de suco de laranja (2 colheres podem ser substituídas por cointreau ou licor de laranja)</li>
                                        <li>Raspas da casca de 1/2 laranja</li>
                                        <li>Pimenta rosa</li>
                                        <h2>Modo de preparo</h2>
                                        <ol>
                                            <li>Leve o leite e o chocolate ao fogo em uma panelinha</li>
                                            <li> Misture um pouco até que o chocolate se derreta</li>
                                            <li>Em uma tigela, bata bem as gemas com o açúcar até que o amarelo fique clarinho</li>
                                            <li>Quando o leite estiver quase fervendo, adicione a gemada e mexa bem com um batedor de arame</li>
                                            <li>Continue batendo em fogo baixo até que fique bem cremoso, por cerca de três minutos</li>
                                            <li> Acrescente o suco de laranja ou cointreau, as raspas de laranja e desligue o fogo</li>
                                            <li>Para que fique com uma espuma deliciosa, bata bastante com o batedor antes de servir</li>
                                            <li>Decore usando pimenta rosa</li>
                                        </ol>
                                    </ul>
                                </div>
                            </div>
                    </div>
                </div>
        </div>
    )
}

export default Clientes