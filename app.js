$(function ()
{
    const email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const nohp = /^(\+\d{1,3}\d{4,13}|0\d{4,13})$/;
    const username = /^[a-zA-Z0-9_]{5,}$/;
    const idemployer = /^C-\d+$/;
    const password = /^(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    
    $('input').each(function ()
    {
        $(this).on('input', function ()
        {
            const pElement = $(this).parent().siblings().filter('p');
            
            if ($(this).attr('id') == "idemployer")
            {
                if (idemployer.test($(this).val()))
                {
                    pElement.html('ID Valid')
                    pElement.removeClass('text-indigo-300 text-red-900')
                    pElement.addClass('text-green-900')
                }
                else
                {
                    pElement.html('ID Tidak Dikenal (Cttn:format ialah "C-(kode digit anda)"')
                    pElement.removeClass('text-indigo-300 text-green-900')
                    pElement.addClass('text-red-900')
                }
            }
            else if ($(this).attr('id') == "email")
            {
                    if (email.test($(this).val()))
                    {
                        pElement.html('Email Valid')
                        pElement.removeClass('text-indigo-300 text-red-900')
                        pElement.addClass('text-green-900')
                    }
                    else
                    {
                        pElement.html('Email Tidak Dikenal')
                        pElement.removeClass('text-indigo-300 text-green-900')
                        pElement.addClass('text-red-900')
                    }
                }
                else if ($(this).attr('id') == "username")
                {
                    if (username.test($(this).val()))
                {
                    pElement.html('Username Valid')
                    pElement.removeClass('text-indigo-300 text-red-900')
                    pElement.addClass('text-green-900')
                }
                else
                {
                    pElement.html('Username Minimal 5 Karakter')
                    pElement.removeClass('text-indigo-300 text-green-900')
                    pElement.addClass('text-red-900')
                }
            }
            else if ($(this).attr('id') == "password")
            {
                if (password.test($(this).val()))
                {
                    pElement.html('password Valid')
                    pElement.removeClass('text-indigo-300 text-red-900')
                    pElement.addClass('text-green-900')
                }
                else
                {
                    pElement.html('Password minimal 6 karakter, memiliki setidaknya 1 huruf kapital')
                    pElement.removeClass('text-indigo-300 text-green-900')
                    pElement.addClass('text-red-900')
                }
            }
            else if ($(this).attr('id') == "nohp")
            {
                if (nohp.test($(this).val()))
                {
                    pElement.html('Nomor Valid')
                    pElement.removeClass('text-indigo-300 text-red-900')
                    pElement.addClass('text-green-900')
                }
                else
                {
                    pElement.html('Nomor Tidak Dikenal')
                    pElement.removeClass('text-indigo-300 text-green-900')
                    pElement.addClass('text-red-900')
                }
            }
        })
    })
})