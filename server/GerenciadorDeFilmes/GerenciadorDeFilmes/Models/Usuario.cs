using System.ComponentModel.DataAnnotations.Schema;

namespace GerenciadorDeFilmes.Models;

public class Usuario
{
    public int Id { get; set; }
    public string Nome { get; set; }
    public string Email { get; set; }
    public string Senha { get; set; }
  
}
