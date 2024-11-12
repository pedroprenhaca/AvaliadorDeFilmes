namespace GerenciadorDeFilmes.Models;

public class Filme
{
    public int Id { get; set; }
    public string Titulo { get; set; }
    public string Genero { get; set; }
    public int Ano { get; set; }
    public double Avaliacao { get; set; }
    public string CapaUrl { get; set; }
    
}