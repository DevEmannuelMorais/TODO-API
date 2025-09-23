export function errorHandler(err, req, res, next) {
    console.error("🔥 Error Handler:", err);

    // Se for erro da nossa aplicação
    if (err.statusCode) {
        return res.status(err.statusCode).json({
            error: err.message,
        });
    }

    // Erro inesperado (500)
    return res.status(500).json({
        error: "Internal Server Error",
    });
}
