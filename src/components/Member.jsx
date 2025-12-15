import { useState } from 'react'

/*
member: {
    id: number,
    name: string,
    image: string (url),
    href: string (url),
    text: { id: string, text: string },
    socialMedia: [ 
        { platform: string, url: string }
    ]
}
*/


export default function Member(member) {
    const [imgError, setImgError] = useState(false)

    return (
        <div className="flex flex-col md:flex-row items-center md:items-start p-4 gap-6">
            <div className="flex flex-col items-center flex-shrink-0">
                <a href={member.href} className="block w-32 h-32 mb-2 overflow-hidden rounded-[5%] border-2 border-gray-300 relative">
                    {!imgError ? (
                        <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover"
                            onError={() => setImgError(true)}
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-700 text-xs text-center">
                            Sem imagem
                        </div>
                    )}
                </a>
                <h3 className="text-lg font-medium text-center">{member.name}</h3>
            </div>
            
            <div className="flex flex-col flex-grow text-left w-full">
                {member.text && member.text.text && (
                    <p className="text-sm text-gray-600 mb-4">{member.text.text}</p>
                )}
                {member.socialMedia && member.socialMedia.length > 0 && (
                    <div className="flex flex-wrap gap-3">
                        {member.socialMedia.map((social, index) => (
                        <a
                            key={index}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-blue-600 hover:underline"
                        >
                            {social.platform}
                        </a>
                    ))}
                    </div>
                )}
            </div>
        </div>
    )
}
