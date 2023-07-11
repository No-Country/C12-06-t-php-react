<?php

namespace App\Http\Controllers;

use App\Models\Image;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class CarouselController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $images = Image::all();
        return response()->json($images);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $imageName = Str::random(32).".".$request->file('image')->getClientOriginalExtension();

        Storage::disk('public')->put($imageName, $request->file('image')->get());

        $url =  url('/') . Storage::url($imageName);

        try{

            $image = Image::create([
                'filename' => $imageName,
                'type' => $request->type,
                'link' => $url,
            ]);


            return response()->json([
                'message' => 'Image created successfully',
                'image' => $image,
            ], 201);

        }catch(\Exception $e){
            Storage::disk('public')->delete($imageName);
            return response()->json([
                'message' => 'Image not created',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $image = Image::findOrFail($id);

        return response()->json($image);
    }


    /**
     * Update the specified resource in storage.
     */

    public function update(Request $request, string $id)
    {
        try {
            $image = Image::findOrFail($id);

            if($request->image){

                Storage::disk('public')->delete($image->filename);
                // save new image
                $imageName = Str::random(32).".".$request->file('image')->getClientOriginalExtension();
                Storage::disk('public')->put($imageName, $request->file('image')->get());
                $url = url('/') . Storage::url($imageName);
                $image->link = $url;
                $image->filename = $imageName;
                $image->save();
            }


            return response()->json([
                'message' => 'Image updated successfully',
                'image' => $image,
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Image not updated',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $image = Image::findOrFail($id);

        try{
            Storage::disk('public')->delete($image->filename);
            $image->delete();
            return response()->json([
                'message' => 'Image deleted successfully',
            ], 200);
        }catch(\Exception $e){
            return response()->json([
                'message' => 'Image not deleted',
                'error' => $e->getMessage(),
            ], 500);
        }
    }
}
