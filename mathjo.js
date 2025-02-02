const MathJo = {
    /**
     * Clamps a given value within a specified range.
     * @param v The value to clamp.
     * @param mn The minimum allowable value.
     * @param mx The maximum allowable value.
     * @return The clamped value within [mn, mx].
     */
    clamp: function (v, mn, mx) {
        return Math.max(mn, Math.min(v, mx));
    },

    /**
     * Converts an angle in degrees to a normalized direction vector.
     * @param a The angle in degrees.
     * @return A unit vector [x, y] representing the direction.
     */
    getDegVector: function (a) {
        const rad = (Math.PI / 180) * a;
        let x = Math.cos(rad);
        let y = Math.sin(rad);

        let length = Math.sqrt((x * x) + (y * y));
        return [x / length, y / length];
    },

    /**
     * Return the 2D Euclidian distance between points (x1,y1) and (x2,y2)
     * @param x1 the x-position of point 1
     * @param y1 the y-position of point 1
     * @param x2 the x-position of point 2
     * @param y2 the y-position of point 2
     * @return the distance between (x1,y1) and (x2,y2)
     */
    getDistanceTwoPoints: function (x1, y1, x2, y2) {
        return Math.hypot(x1 - x2, y1 - y2);
    },

    /**
     * Converts an angle in radians to a normalized direction vector.
     * @param a The angle in radians.
     * @return A unit vector [x, y] representing the direction.
     */
    getRadVector: function (a) {
        let x = Math.cos(a);
        let y = Math.sin(a);

        let length = Math.sqrt((x * x) + (y * y));
        return [x / length, y / length];
    },

    /**
     * Linearly interpolates between two values based on a given ratio.
     * @param va The starting value.
     * @param vb The ending value.
     * @param ratio The interpolation factor (0 to 1).
     * @return The interpolated value.
     */
    lerp: function (va, vb, ratio) {
        return va + ratio * (vb - va);
    },

    /**
     * Checks if a value falls within a specified range (inclusive).
     * @param v The value to check.
     * @param mn The minimum range value.
     * @param mx The maximum range value.
     * @return True if v is within the range [mn, mx], false otherwise.
     */
    rangeCheck: function (v, mn, mx) {
        return (v <= mx && v >= mn);
    },

    /**
     * Truncates all numbers in an array to a specified number of decimal places.
     * @param c The array of numbers.
     * @param y The number of decimal places.
     * @return A new array with truncated values.
     */
    truncateArray: function (c, y) {
        return c.map(num => MathJo.truncateNumber(num, y));
    },

    /**
     * Truncates a number to a specified number of decimal places.
     * @param x The number to truncate.
     * @param y The number of decimal places.
     * @return The truncated number.
     */
    truncateNumber: function (x, y) {
        const factor = Math.pow(10, y);
        return Math.trunc(x * factor) / factor;
    },

    /**
     * Wraps a value around within a given range [0, max).
     * @param v The value to wrap.
     * @param max The maximum limit (exclusive).
     * @return The wrapped value within [0, max).
     */
    wrapValue: function (v, max) {
        return ((v % max) + max) % max;
    }
};

export default MathJo;