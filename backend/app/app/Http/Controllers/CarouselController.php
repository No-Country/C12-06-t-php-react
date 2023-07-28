<?php

namespace App\Http\Controllers;

use App\Http\Helpers\ApiResponse;
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
        return ApiResponse::create($images);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $imageName = sprintf("%s%s-%s.png", date('Y'), date('m'), date('his'), md5(uniqid()), $request->file('image')->getClientOriginalExtension());

        Storage::disk('public')->put($imageName, $request->file('image')->get());

        $url =  url('/') . Storage::url($imageName);

        try {

            $image = Image::create([
                'filename' => $imageName,
                'type' => $request->type,
                'link' => $url,
            ]);


            return ApiResponse::create(
                $image,
                'Image created successfully'
            );
        } catch (\Exception $e) {
            Storage::disk('public')->delete($imageName);
            return ApiResponse::create(
                null,
                "Image not created",
                $e->getMessage()
            );
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $image = Image::findOrFail($id);

        return ApiResponse::create($image);
    }


    /**
     * Update the specified resource in storage.
     */

    public function update(Request $request, string $id)
    {
        try {
            $image = Image::findOrFail($id);

            if ($request->image) {

                Storage::disk('public')->delete($image->filename);
                // save new image
                $imageName = Str::random(32) . "." . $request->file('image')->getClientOriginalExtension();
                Storage::disk('public')->put($imageName, $request->file('image')->get());
                $url = url('/') . Storage::url($imageName);
                $image->link = $url;
                $image->filename = $imageName;
                $image->save();
            }


            return ApiResponse::create(
                $image,
                'Image updated successfully'
            );
        } catch (\Exception $e) {
            return ApiResponse::create(
                null,
                "Image not updated",
                $e->getMessage()
            );;
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $image = Image::findOrFail($id);

        try {
            Storage::disk('public')->delete($image->filename);
            $image->delete();
            return ApiResponse::create(
                null,
                'Image deleted successfully'
            );
        } catch (\Exception $e) {
            return ApiResponse::create(
                null,
                "Image not deleted",
                $e->getMessage()
            );;
        }
    }
}
