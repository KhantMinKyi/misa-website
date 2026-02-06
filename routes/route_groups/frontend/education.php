<?php

use App\Http\Controllers\GeneralPageRouteController;
use Illuminate\Support\Facades\Route;

Route::get('/kindergarten-programs', [GeneralPageRouteController::class, 'getKGPage'])->name('kindergarten-programs');
