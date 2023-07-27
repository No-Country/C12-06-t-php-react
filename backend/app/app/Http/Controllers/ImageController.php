<?php

namespace App\Http\Controllers;

use App\Http\Helpers\ApiResponse;
use App\Http\Helpers\CloudinaryHelper;
use App\Models\Image;
use Illuminate\Http\Request;

class ImageController extends Controller
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
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $added_images = [];
        if (is_array($request->file('image'))) {
            $images_files = $request->file('image');

            foreach ($images_files as $image_file) {
                $file_uploaded_path = CloudinaryHelper::uploadFile($image_file);

                $created_image = Image::create([
                    'filename' => $image_file->getClientOriginalName(),
                    'type' => $request->image_type,
                    'link' => $file_uploaded_path,
                ]);

                $added_images[] = $created_image;
            }
        } else {
            $image_file = $request->file('image');
    
            $file_uploaded_path = CloudinaryHelper::uploadFile($image_file);
    
            $created_image = Image::create([
                'filename' => $image_file->getClientOriginalName(),
                'type' => $request->image_type,
                'link' => $file_uploaded_path,
            ]);

            $added_images[] = $created_image;
        }

        return ApiResponse::create($added_images);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
