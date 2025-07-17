
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const CallToAction = () => {
  const handleScheduleCall = () => {
    const phoneNumber = "7208837152";
    const message = "Hi! I'd like to schedule a call to discuss my project with Gensys.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Card className="bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
      <CardContent className="p-8">
        <h3 className="text-2xl font-bold mb-4">Ready to start your project?</h3>
        <p className="mb-6">
          Let's discuss your requirements and create something amazing together.
        </p>
        <Button 
          variant="secondary" 
          className="bg-white text-blue-600 hover:bg-gray-100 transform hover:scale-105 active:scale-95 transition-all duration-300"
          onClick={handleScheduleCall}
        >
          Schedule a Call
        </Button>
      </CardContent>
    </Card>
  );
};
