const validateMiddleware = (schema) => (req, res, next) => {
    const response = schema.safeParse(req.body)

    if (!response.success) {
        return res.status(400).json({
            error: response.error.issues
        })
    }

    next();
}

export default validateMiddleware;