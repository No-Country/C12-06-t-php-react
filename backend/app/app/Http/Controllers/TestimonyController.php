<?php

namespace App\Http\Controllers;

use App\Http\Helpers\ApiResponse;
use App\Models\Testimonials;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class TestimonyController extends Controller
{

    protected $cols_to_get = [
        'testimonials.id',
        'testimonials.client_id',
        'u.name as client_name',
        'u.lastname as client_lastname',
        'testimonials.company',
        'testimonials.icon_company',
        'testimonials.comment',
        'testimonials.avatar',
        'testimonials.position',
    ];

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $testimonys = Testimonials::join('clients as c', 'testimonials.client_id', 'c.id')
            ->join('users as u', 'c.user_id', 'u.id');
        $testimonys = $testimonys->get($this->cols_to_get);
        return ApiResponse::create($testimonys);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $inputs = $request->all();
        $validator = Validator::make($inputs, [
            'client_id' => 'required|integer',
            'company' => 'required',
            'icon_company' => 'required',
            'comment' => 'required',
            'avatar' => 'required',
            'position' => 'required'
        ], [
            'required' => 'El :attribute es requerido',
            'integer' => 'El :attribute no es un numero entero'
        ]);
        if ($validator->fails()) {
            return json_encode($validator->errors());
        } else {
            $testimony = Testimonials::create($inputs);
            return ApiResponse::create($testimony, "Registrado con exito");
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {

        $testimonys = Testimonials::join('clients as c', 'testimonials.client_id', 'c.id')
            ->join('users as u', 'c.user_id', 'u.id')
            ->where('testimonials.id', $id);;

        $testimonys = $testimonys->get($this->cols_to_get);
        if (!$testimonys->isEmpty()) {
            return ApiResponse::create($testimonys, "Testimonio encontrado");
        } else {
            return ApiResponse::create(null, null, 'Testimonio no encontrado');
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'client_id' => 'required|integer',
            'company' => 'required',
            'icon_company' => 'required',
            'comment' => 'required',
            'avatar' => 'required',
            'position' => 'required'
        ]);

        $testimony = Testimonials::findOrFail($id);
        $testimony->update($request->all());
        return ApiResponse::create($testimony, "Testimonio actualizado");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $testimony = Testimonials::find($id);

        if (isset($testimony)) {
            $res = Testimonials::destroy($id);
            if ($res) {
                return ApiResponse::create($testimony, "Testimonio eliminado");
            } else {
                return ApiResponse::create(null, null, "Testimonio no eliminado");
            }
        } else {
            return ApiResponse::create(null, null, "Testimonio no encontrado");
        }
    }
}
