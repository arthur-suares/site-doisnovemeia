import { NextRequest, NextResponse } from 'next/server';

// 1. IMPORTE SUAS FUNÇÕES
// Importa a lógica de negócio do seu controller.
// Verifique se o caminho está correto ou se você usa alias como '@'.
import { changeUserPassword } from '../../../controllers/userController'; 

// IMPORTANTE: Importe sua função de sessão do iron-session aqui!
// Este é um exemplo, o caminho e o nome podem ser diferentes no seu projeto.
import { getSession } from '../../../lib/session'; 

/**
 * Rota para lidar com a alteração de senha de um usuário autenticado.
 * Método: POST
 */
export async function POST(request: NextRequest) {
  try {
    const session = await getSession();
    // ✅ Esta verificação agora vai funcionar!
    if (!session?.isLoggedIn || !session?.userId) {
      return NextResponse.json(
        { error: 'Não autorizado. Você precisa estar logado.' },
        { status: 401 }
      );
    }

    // 3. EXTRAIA OS DADOS DA REQUISIÇÃO
    // Pega a senha atual e a nova senha que o usuário enviou.
    const { currentPassword, newPassword } = await request.json();

    // Valida se os dados foram enviados.
    if (!currentPassword || !newPassword) {
      return NextResponse.json(
        { error: 'Todos os campos são obrigatórios.' },
        { status: 400 } // Bad Request
      );
    }

    // 4. CHAME O CONTROLLER PARA FAZER O TRABALHO PESADO
    // A API delega a lógica para o controller, mantendo o código organizado.
    await changeUserPassword({
      userId: session.userId,
      currentPassword_DB: currentPassword,
      newPassword_DB: newPassword,
    });

    // 5. ENVIE UMA RESPOSTA DE SUCESSO
    // Se o controller não disparou um erro, a senha foi alterada.
    return NextResponse.json({ message: 'Senha alterada com sucesso!' });

  } catch (error) {
    // 6. TRATE OS ERROS QUE O CONTROLLER PODE DISPARAR
    const errorMessage = error instanceof Error ? error.message : 'Ocorreu um erro inesperado.';

    // Se o erro for "senha incorreta", envie o status 401 (Não Autorizado).
    // Para qualquer outro erro, envie o status 500 (Erro Interno do Servidor).
    const statusCode = errorMessage === 'A senha atual está incorreta.' ? 401 : 500;

    return NextResponse.json({ error: errorMessage }, { status: statusCode });
  }
}