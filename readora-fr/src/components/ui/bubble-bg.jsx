import { BubbleBackground } from '@/components/animate-ui/backgrounds/bubble';

export const BubbleBackgroundDemo = () => {
    return (
        <div className="fixed inset-0 -z-10">
            <BubbleBackground interactive className="w-full h-full" />
        </div>
    );
};
