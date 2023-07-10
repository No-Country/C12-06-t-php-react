<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class AccessValidationMiddleware
{
    public function handle($request, Closure $next)
    {
        $user = Auth::user();

        // Verifica si el usuario tiene acceso al endpoint sensible
        if ($user && in_array($user->role, [1,2])) {
            return $next($request);
        }

        // Si el usuario no tiene acceso, puedes redirigirlo a una página de error o lanzar una excepción.
        abort(403, 'Acceso denegado');
    }
}
