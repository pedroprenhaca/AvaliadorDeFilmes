using System.Collections.Generic;
using GerenciadorDeFilmes.Models;
using Microsoft.EntityFrameworkCore;

namespace GerenciadorDeFilmes.Data;

public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
       : base(options)
    {
    }
    public DbSet<Filme> Filmes { get; set; }

}
