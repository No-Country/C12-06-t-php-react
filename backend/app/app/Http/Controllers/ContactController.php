<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactoMailable;

class ContactController extends Controller
{
    public function index()
    {
        return view('contact');
    }

    public function enviar(Request $request)
    {
        // Aquí puedes agregar la lógica para procesar y guardar los datos del formulario de contacto

        $data = [
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'message' => $request->input('message')
        ];

        Mail::to('destinatario@example.com')->send(new ContactoMailable($data));

        return redirect('/contact')->with('success', '¡El mensaje ha sido enviado!');
    }
}
