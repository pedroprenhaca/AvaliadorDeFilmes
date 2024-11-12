using System.ComponentModel.DataAnnotations;

namespace GerenciadorDeFilmes.Models;

public class RegistroUsuario
{
    [Required(ErrorMessage = "O e-mail é obrigatório.")]
    [EmailAddress(ErrorMessage = "Formato de email inválido")]
    public string Email { get; set; }

    [Required(ErrorMessage = "A Senha é obrigatória.")]
    [MinLength(6,ErrorMessage ="A senha deve ter no mínimo 6 caracteres.")]
    public string Senha { get; set; }

    [Required(ErrorMessage = "A confirmação de senha é obrigatória.")]
    [Compare("Senha", ErrorMessage = "As senhas não conferem.")]
    public string ConfirmacaoSenha { get; set; }
}
