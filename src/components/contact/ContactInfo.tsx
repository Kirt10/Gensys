
import { Mail, Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { InteractiveCard } from "@/components/InteractiveCard";

export const ContactInfo = () => {
  return (
    <InteractiveCard hoverEffect="lift">
      <div className="p-0">
        <CardHeader>
          <CardTitle className="text-2xl dark:text-white">Get in touch</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-start space-x-4 group">
            <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
              <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white">Email</h4>
              <p className="text-gray-600 dark:text-gray-300">121kirtan2122@sjcem.edu.in</p>
            </div>
          </div>

          <div className="flex items-start space-x-4 group">
            <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
              <Phone className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white">Phone</h4>
              <p className="text-gray-600 dark:text-gray-300">+91 7208837152</p>
            </div>
          </div>

          <div className="flex items-start space-x-4 group">
            <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl">⏰</span>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white">Business Hours</h4>
              <p className="text-gray-600 dark:text-gray-300">Monday - Friday: 9 AM - 6 PM</p>
              <p className="text-gray-600 dark:text-gray-300">Weekend: By appointment</p>
            </div>
          </div>
        </CardContent>
      </div>
    </InteractiveCard>
  );
};
