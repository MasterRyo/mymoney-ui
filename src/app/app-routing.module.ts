import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PessoaCadastroComponent } from './pessoas/pessoa-cadastro/pessoa-cadastro.component';
import { PessoasPesquisaComponent } from './pessoas/pessoas-pesquisa/pessoas-pesquisa.component';
import { LancamentoCadastroComponent } from './lancamentos/lancamento-cadastro/lancamento-cadastro.component';
import { LancamentosPesquisaComponent } from './lancamentos/lancamentos-pesquisa/lancamentos-pesquisa.component';
import { PaginaNaoEncontradaComponent } from './core/pagina-nao-encontrada.component';
import { PaginaNaoAutorizadaComponent } from './core/pagina-nao-autorizada.component';
import { LogoutComponent } from './core/logout.component';

const routes: Routes = [
  {path: 'lancamentos', loadChildren: 'app/lancamentos/lancamentos.module#LancamentosModule'},
  {path: 'pessoas', loadChildren: 'app/pessoas/pessoas.module#PessoasModule'},
  {path: 'dashboard', loadChildren: 'app/dashboard/dashboard.module#DashboardModule'},
  {path: 'relatorios', loadChildren: 'app/relatorios/relatorios.module#RelatoriosModule'},

  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'erro-404', component: PaginaNaoEncontradaComponent},
  {path: 'acesso-negado', component: PaginaNaoAutorizadaComponent},
  {path: 'logout', component: LogoutComponent},
  {path: '**', redirectTo: 'erro-404'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ]
})

export class AppRoutingModule { }
