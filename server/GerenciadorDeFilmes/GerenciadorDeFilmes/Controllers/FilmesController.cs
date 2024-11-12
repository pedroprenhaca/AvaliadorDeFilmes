using GerenciadorDeFilmes.Data;
using GerenciadorDeFilmes.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace GerenciadorDeFilmes.Controllers;
[Route("api/[controller]")]
[ApiController]
public class FilmesController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public FilmesController(ApplicationDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Filme>>> GetFilmes()
    {
        return await _context.Filmes.ToListAsync();
    }

    [HttpPost]
    public async Task<ActionResult<Filme>> PostFilme(Filme filme)
    {
        _context.Filmes.Add(filme);
        await _context.SaveChangesAsync();

        return CreatedAtAction("GetFilme", new { id = filme.Id }, filme);
    }
}